const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * 环境变量
 * @type {String}
 */
const ENV = process.env.NODE_ENV;
const API = process.env.API || ENV;
const CLIENT = process.env.CLIENT || 'jianghai';

/**
 * 设置路径快捷函数
 */
const setPath = url => path.resolve(__dirname, url);

/**
 * 配置（公共部分）
 * @type {Object}
 */
let config = {
  /**
   * 入口文件设置
   * @type {Object}
   */
  entry: {
    main: ['./src/bootstrap.js']
  },

  /**
   * 自动引入后缀名 & 解析别名规则
   * @type {Object}
   */
  resolve: {
    alias: {
      '@assets': setPath(`src/assets/${CLIENT}`),
      '@lib': setPath('src/libs'),
      '@page': setPath(`src/apps/${CLIENT}/pages`),
      '@config': setPath(`src/config`),
      '@model': setPath(`src/models/${CLIENT}`),
      '@com': setPath(`src/components`)
    },
    extensions: ['.vue', '.js', '.scss', '.css', '.sass']
  },

  /**
   * loader 规则
   * @type {Object}
   */
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [setPath('src')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true
        }
      },
      {
        test: /\.(scss|sass|css)$/,
        include: [setPath('src')],
        use: [
          ENV === 'development'
            ? 'vue-style-loader'
            : {
                loader: ExtractCssChunks.loader,
                options: {
                  publicPath: '../'
                }
              },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              data: `@import "~@assets/var.scss";`
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        include: setPath('src'),
        loader: 'url-loader',
        options: {
          limit: 1024 * 5,
          name: 'img/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        include: setPath('src'),
        loader: 'url-loader',
        options: {
          name: 'media/[name].[hash:5].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        include: setPath('src'),
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[hash:5].[ext]'
        }
      }
    ]
  },

  /**
   * 插件列表
   * @type {Array}
   */
  plugins: [
    // vue loader 必用
    new VueLoaderPlugin(),

    // 全局环境变量定义
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(ENV),
      __CLIENT__: JSON.stringify(CLIENT),
      __API__: JSON.stringify(API)
    }),

    // html 文件
    new HtmlWebpackPlugin({
      // favicon: './src/assets/favicon.ico',
      template: './index.html',
      filename: './index.html',
      inject: 'body',
      chunksSortMode: 'none',
      nbComponent:
        ENV === 'development'
          ? 'https://unpkg.com/nb-component@1.0.2/dist/nb-component.js'
          : `script/external/nb-component.js?_=${Date.now()}`
    }),

    new ExtractCssChunks({
      filename: 'css/[name].[hash:5].css',
      chunkFilename: 'css/[name].[id].[hash:5].css',
      hot: ENV === 'development',
      orderWarning: ENV === 'development',
      reloadAll: ENV === 'development',
      cssModules: false
    })
  ],

  /**
   * 优化配置
   */
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

/**
 * 开发环境配置
 */
if (ENV === 'development') {
  config.mode = ENV;
  config.devtool = 'source-map';
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.devServer = {
    clientLogLevel: 'warning',
    hot: true,
    host: '0.0.0.0',
    stats: {
      assets: true,
      performance: true,
      timings: true,
      builtAt: false,
      children: false,
      chunks: false,
      hash: false,
      entrypoints: false,
      modules: false,
      cached: false,
      cachedAssets: false
    }
  };
}

/**
 * 发布配置
 */
if (ENV !== 'development') {
  config.output = {
    filename: 'script/[name].[contenthash].js',
    path: setPath(`dist/${CLIENT}`),
    publicPath: ''
  };
  config.plugins.push(
    new CompressionPlugin({
      cache: true,
      threshold: 10240
    })
  );
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
  config.plugins.push(
    new CopyPlugin([
      { from: 'external', to: `script/external` }
    ])
  );
  config.optimization.minimizer = [
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: false
    }),
    // 优化 css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        safe: true,
        autoprefixer: { disable: true },
        mergeLonghand: false,
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    })
  ];
}

module.exports = config;

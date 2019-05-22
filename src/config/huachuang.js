/**
 * 华创配置
 */

export default {
  // 项目名
  appName: '华创VTM智能助手',
  // 版本号
  version: '1.0.0',
  // 显示文案
  text: {},
  // 接口地址
  api: {
    development: 'http://jhbackendtest.xpe.com:12271',
    test: 'http://jhbackendtest.xpe.com:12271',
    production: 'http://jhbackendtest.xpe.com:12271',
  }[__API__]
}
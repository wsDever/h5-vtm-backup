/**
 * 配置信息
 */

let Config = {
  // 基础配置
  mobileDevTool: true, // 开启手机调试工具
  tokenSessName: `${__CLIENT__}_token`, // 存储 token 的session 名字
  userInfoSessName: `${__CLIENT__}_user`, // 用户信息
  accountLocalName: `${__CLIENT__}_account`, // 记住账号
  // 显示文案
  text: {
    mobileError: '请输入有效手机号',
    passwordError: '密码为6-16位数字或字母',
    shareCodeError: '邀请码格式错误',
    verifyCodeReq: '请输入验证码'
  }
};

const mergeClientConfig = async function() {
  const data = await import(
    /* webpackChunkName: "client-config" */ `./${__CLIENT__}.js`
  );
  for (let k in data.default) {
    // 合并
    if (Config[k]) {
      Config[k] = {
        ...Config[k],
        ...data.default[k]
      };
    }
    else {
      Config[k] = data.default[k];
    }
  }
};

mergeClientConfig();

export default Config;

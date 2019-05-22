/**
 * 通用：登录身份认证相关（token模式）
 */

import { action, observable, runInAction } from 'mobx';
import { XHR } from '@lib/xhr';
import Config from '@config';
import Utils from '@lib/utils';

/**
 * 身份相关
 */

class AuthModel {
  /**
   * 校验手机号码格式
   * @param {String} mobile_tel
   */
  async validMobile(mobile_tel) {
    if (!Utils.rules.mobile(mobile_tel)) {
      Utils.nb.toast(Config.text.mobileError);
      return false;
    }
    return true;
  }

  /**
   * 保存登录后用户的一些必要的信息全局可用
   */
  userLoginRes = observable.map(
    JSON.parse(sessionStorage.getItem(Config.userInfoSessName) || '{}')
  );

  /**
   * 保存注册流程中保存的用户信息
   */
  userRegRes = observable.map({});

  /**
   * 记住账号，设置账号信息则为设置记住账号
   */
  rememberAccount(account_content) {
    if (!account_content)
      return localStorage.getItem(Config.accountLocalName) || '';
    localStorage.setItem(Config.accountLocalName, account_content);
  }

  /**
   * 用户登录
   * account_content	String	登录账号
      password	String	密码
      encode_type	String	加密方式 0表示明文 1表示密文
      image_code_type	String	是否需要图片验证码 0表示不需要 1表示需要
      image_code	String	图形验证码
   */
  async login(params) {
    const { data } = await XHR.post('/snp/CRH-SNP2001', {encode_type:1,...params});
    this.rememberAccount(params.account_content);
    return data;
  }

  /**
   * 检查手机号是否已经存在
   * mobile_tel 手机号
   */
  async isMobileExist(params) {
    if (!(await this.validMobile(params.mobile_tel))) return false;
    const { data } = await XHR.post('/snp/CRH-SNP2049', params);
    return data.register; // 1:存在 0:不存在
  }

  /**
   * 设置用户登录密码
   * password	String	密码
      mac_address	String	MAC地址
      image_code	String	图片验证码
   */
  async setPassword(params) {
    // 校验密码规范
    if (!Utils.rules.password(params.password)) {
      Utils.nb.toast(Config.text.passwordError);
      return false;
    }
    try {
      await XHR.post('/snp/CRH-SNP2006', {
        ...params
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * 获取验证码
   * mobile_tel	String	手机号码
    msg_type	String	1：更换绑定手机，2：更换密码，3：短信验证码登录 默认值: 1
    image_code	String	图形验证码
   */
  async sendVerifyCode(params) {
    if (!(await this.validMobile(params.mobile_tel))) return false;
    await XHR.post('/snp/CRH-SNP2004', {
      ...params
    });
    Utils.nb.toast('验证已发送');
    return true;
  }
}

export default AuthModel;

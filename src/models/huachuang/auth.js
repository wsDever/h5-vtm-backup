import Auth from '../common/auth';
import {action, observable, runInAction} from 'mobx';
import {XHR} from '@lib/xhr';
import Config from '@config';
import Utils from '@lib/utils';

class AuthModel extends Auth {
	/**
	 * 寄存入参接口拿到的所有签署业务协议内容
	 */
	_signAgreementCollection = [];

	/**
	 * 江海登录流程
	 */
	async loginJianghai(params) {
		const password = Utils.encrypt(params.password);
		const data = await this.login({
			...params,
			password,
		});
		runInAction(() => {
			// 原生交互
			if (Utils.device.ios) {
				location.href = 'objc://loginSuccess/';
			} else if (Utils.device.android) {
				window.jtoJHandle && window.jtoJHandle.loginSuccess();
			}
			// 存入登录成功后的用户信息
			Object.keys(data).map(key => {
				if (!~['error_no', 'error_info'].indexOf(key)) {
					this.userLoginRes.set(key, data[key]);
				}
				// 用户信息加入 session
				sessionStorage.setItem(Config.userInfoSessName, JSON.stringify(this.userLoginRes.toJSON()));
				// token 加入 session
				if (key === 'token') {
					sessionStorage.setItem(Config.tokenSessName, data.token);
				}
			});
			console.log('用户登录成功, 存入数据:', this.userLoginRes.toJSON());
		});
	}

	/**
	 * 签署协议入参获取
	 */
	async signAgreementParams() {
		const {data} = await XHR.post('/snp/CRH-SNP3058', {
			busin_type: Config.agreementBusinType,
		});
		this._signAgreementCollection = data.data;
	}

	/**
	 * 注册前 获取签约流程协议
	 * 注意：目前只会获得协议列表里第一份协议内容
	 * agreement_no  String  协议编号
	 agreement_version  String  协议版本号
	 */
	async agreement() {
		await this.signAgreementParams();
		const {
			agreement_no,
			agreement_version,
		} = this._signAgreementCollection[0];
		const {data} = await XHR.post('/snp/CRH-SNP3055', {
			agreement_no,
			agreement_version,
		});
		return data.data;
	}

	/**
	 * 签署签约流程
	 * econtract_no  String[]   电子合同编号
	 econtract_name  String[]   电子合同名称
	 econtract_md5  String[]   电子合同MD5值
	 sign_value  String[]   签名内容
	 digest_info  String[]   摘要信息
	 */
	async signAgreement() {
		const agreementData = this._signAgreementCollection[0];
		try {
			await XHR.post('/snp/CRH-SNP3056', {
				econtract_no: agreementData.agreement_no,
				econtract_name: agreementData.agreement_name,
				econtract_md5: agreementData.content_md5,
				sign_value: agreementData.agreement_content_type,
				digest_info: agreementData.econtract_content,
			});
			return true;
		} catch (e) {
			return false;
		}
	}

	/**
	 * 准经纪人注册，前置（设置密码）
	 * share_code  String  邀请人邀请编号
	 mac_address  String  mac地址
	 */
	@action
	async brokerRegister(params) {
		if (!Utils.rules.shareCode(params.share_code)) {
			Utils.nb.toast(Config.text.shareCodeError);
			return false;
		}
		try {
			await XHR.post('/snp/CRH-SNP2053', params);
			return true;
		} catch (e) {
			return false;
		}
	}

	/**
	 * 校验验证码
	 * mobile_tel  String  手机号码
	 sms_code  String  短信验证码
	 bind_mac  String  MAC地址
	 source_info 可选  String  来源 默认值: jjb
	 */
	@action
	async checkVerifyCode(params) {
		if (params.sms_code.length === 0) {
			Utils.nb.toast(Config.text.verifyCodeReq);
			return false;
		}
		if (!(await this.validMobile(params.mobile_tel))) return false;
		try {
			const {data} = await XHR.post('/snp/CRH-SNP2048', params);
			// 获取到的token写入，得到设置密码的权限
			runInAction(() => {
				Object.keys(data).map(key => {
					if (!~['error_no', 'error_info'].indexOf(key)) {
						this.userRegRes.set(key, data[key]);
					}
					// token 加入 session
					if (key === 'token') {
						sessionStorage.setItem(Config.tokenSessName, data.token);
					}
				});
			});
			return true;
		} catch (e) {
			return false;
		}
	}
}

export default new AuthModel();

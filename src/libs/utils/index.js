/**
 * 工具函数合集
 */
import nb from './nb';
import url from './url';
import rules from './rules';
import device from './device';
import CryptoJS from '@lib/aes';
import AuthModel from '@model/auth';

export default {
	// 通用组件函数
	nb,
	// 链接地址相关
	url,
	// 数据校验正则
	rules,
	// 设备相关
	device,
	// 登录密码加密
	encrypt(word) {
		var key = CryptoJS.enc.Utf8.parse('cairenhui0123456');
		var srcs = CryptoJS.enc.Utf8.parse(word);
		var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
		return encrypted.toString();
	},
	//获取用户信息
	getUserInfo() {
		return AuthModel.userLoginRes.toJSON();
	},
};

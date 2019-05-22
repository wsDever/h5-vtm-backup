/**
 * 返回设备平台
 */
const u = navigator.userAgent;
export default {
  ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
  android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
}
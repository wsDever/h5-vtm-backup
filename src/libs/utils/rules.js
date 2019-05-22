export default {
  // 手机号
  mobile(tel) {
    return /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/.test(tel);
  },
  // 密码
  password(str) {
    return /^[0-9A-Za-z]{6,16}$/.test(str);
  },
  // 邀请码
  shareCode(str) {
    return /^[0-9a-zA-Z]*$/g.test(str);
  }
}
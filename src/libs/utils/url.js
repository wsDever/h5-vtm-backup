export default {
  /**
   * object => serialize
   * @param  {Object} obj
   * @return {String}
   */
  serialize(obj) {
    return Object.keys(obj)
      .map(k => {
        if (~Object.prototype.toString.call(obj[k]).search(/Array|Object/)) {
          obj[k] = JSON.stringify(obj[k]);
        }
        return `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`;
      })
      .join('&');
  },

  /**
   * hash search 转对象
   * ?a=a&b=b => {a:'a',b:'b'}
   * @param  {String} hash
   * @return {Object}
   */
  search2obj(hash = '') {
    let ret = {},
      seg = decodeURIComponent(hash)
        .replace(/^\?/, '')
        .split('&'),
      len = seg.length,
      i = 0,
      s;
    for (; i < len; i++) {
      if (!seg[i]) {
        continue;
      }
      s = seg[i].split('=');
      ret[s[0]] = s[1];
    }
    return ret;
  }
};

/**
 * 来自标准组件的一些方法注入，比如toast等需要配合 components/external 食用
 */
export default {
  /**
   * 弹窗信息
   * @param {String} type 弹窗类型 alert | confirm
   * @param {Object} opts 额外配置 参考API：http://git.cairenhui.com/linyu/nb-component/tree/master/src/components/modal
   */
  modal: async function(type, opts = {}) {
    // 获取实际配置
    const options = {
      el: 'nb-modal',
      type,
      title: '',
      content: '',
      position: 'center',
      theme: 'default',
      ...opts
    };
    // 组件 dom
    let el = document.querySelector(options.el);
    // 检查是否已经有组件存在页面上
    if (!el) {
      let newEl = document.createElement(options.el);
      document.body.appendChild(newEl);
      el = await new Promise(resolve => setTimeout(resolve, 100, newEl));
    }
    el.setAttribute('type', options.type);
    el.setAttribute('theme', options.theme);
    return await el.show(options.type, options);
  },

  /**
   * 轻提示
   * @param {String} message 提示信息
   * @param {Object} opts 额外配置 参考API：http://git.cairenhui.com/linyu/nb-component/tree/master/src/components/toast
   */
  toast: async function(message, opts = {}) {
    // 获取实际配置
    const options = {
      el: 'nb-toast',
      duration: 2000,
      position: 'center',
      maxLength: 480,
      theme: 'default',
      ...opts
    };
    // 组件 dom
    let el = document.querySelector(options.el);
    // 检查是否已经有组件存在页面上
    if (!el) {
      let newEl = document.createElement(options.el);
      document.body.appendChild(newEl);
      el = await new Promise(resolve => setTimeout(resolve, 100, newEl));
    }
    el.setAttribute('duration', options.duration);
    el.setAttribute('position', options.position);
    el.setAttribute('max-length', options.maxLength);
    el.setAttribute('theme', options.theme);
    return await el.show(message);
  }
};

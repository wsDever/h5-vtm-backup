/**
 * 需要保存某页面之前位置
 * 直接引入 vue-router 里
 * eg:
 * router.beforeEach(function(to, from, next) {
    if (from.name) {
      scrollBehavior.apply(router, [to, from]);
    }
    next();
  });
  在需要恢复位置的路由里加入 meta：keepScroll: true
 */

let scrollPositionStore = {};

export default function(to, from) {
  const $el = this.app.$el;

  // 离开前记录位置
  if (from.meta.keepScroll) {
    scrollPositionStore[from.name] = {
      body: document.body.scrollTop,
      app: $el.scrollTop
    };
    console.log('记录滚动位置', scrollPositionStore);
  }

  // 恢复位置
  if (to.meta.keepScroll) {
    const { body, app } = scrollPositionStore[to.name] || { body: 0, app: 0 };
    let timer = setInterval(() => {
      document.body.scrollTop = body;
      $el.scrollTop = app;
      if (body == document.body.scrollTop && app == $el.scrollTop) {
        clearInterval(timer);
        console.log('恢复滚动位置', scrollPositionStore[to.name]);
      }
    }, 10);
  }
}

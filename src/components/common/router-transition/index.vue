<template>
  <transition
    :name="animation"
    :mode="mode"
    :enter-active-class="transitionEnterActiveClass"
    @before-leave="beforeLeave"
    @enter="enter"
    @after-enter="afterEnter"
  >
    <slot />
  </transition>
</template>

<script>

  /**
   * 处理前后逻辑目前没有找到完美方案
   * 先统一用简单的渐变处理
   */

  import Vue from "vue";
  import Component from "vue-class-component";
  @Component({
    props: {
      // 效果
      animation: {
        type: String,
        default: "fade"
      },
      // 过渡模式
      mode: {
        type: String,
        default: "out-in"
      }
    }
  })
  export default class TransitionPage extends Vue {
    // 进入激活动画样式
    transitionEnterActiveClass = "";

    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
      // 避免在切换效果的时候残留一些无样式的内容
      // element.style.visibility = 'hidden';
    }

    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    }

    afterEnter(element) {
      element.style.height = "auto";
    }

    created() {
      this.transitionEnterActiveClass = `${this.animation}-enter-active`;
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: height, opacity 0.1s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0.1;
  }
</style>
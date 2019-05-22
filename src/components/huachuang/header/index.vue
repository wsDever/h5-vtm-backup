<template>
  <div class="header">
    <div class="logo">
      <div class="icon"></div>
      <div class="text">
        华创证券
        <p>HUA CHUANG SECURITIES</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .header {
    .text {
      color: red;
    }
  }
</style>
<script>
  import Vue from 'vue';
  import Component from 'vue-class-component';
  import CommonHeader from '@com/common/header/index';
  @Component({
    extends: [CommonHeader]
  })
  export default class AppHeader extends Vue {
    mounted() {

    }
  }
</script>
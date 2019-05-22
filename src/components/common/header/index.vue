<template>
  <div class="header">
    <div class="logo">
      <div class="icon"></div>
      客户名称
    </div>
  </div>
</template>
<style lang="scss">
  .header {
    @include flexCSB;
    width: 100vw;
    height: 288px;
    .logo {
      display: flex;
      align-items: center;
      margin-left: 180px;
      min-width: 446px;
      .icon {
        width: 110px;
        height: 110px;
        background: #f5f5f5;
      }
      .text {
        display: inline-block;
        min-width: 316px;
        font-size: 69px;
        margin-left: 20px;
        line-height: 1;
        p {
          font-size: 22px;
        }
      }
    }
  }
</style>

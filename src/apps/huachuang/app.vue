<template>
  <div id="app">
    <app-header></app-header>
    <router-transition>
      <router-view></router-view>
    </router-transition>
  </div>
</template>

<script>
  import Vue from "vue";
  import Component from "vue-class-component";
  import RouterTransition from "@com/common/router-transition";
  @Component({
    components: {
      RouterTransition,
      AppHeader: () => import(`@com/${__CLIENT__}/header/index`)
    },
    watch: {}
  })
  export default class App extends Vue {
    mounted() {}
  }
</script>
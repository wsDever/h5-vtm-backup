export default [
  {
    name: 'home',
    path: '/',
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/home/')
  }
]

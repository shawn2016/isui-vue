// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */

import Vue from 'vue'
import VueRouter from 'vue-router'
import BackToTop from 'vue-backtotop'
import util from './utils/util'
import App from './App'
import isui from '../src'
import Routers from './router'
import Env from './config/env'
import './style/hljs.css'
import bus from './components/bus';
import './style/base.less'
// import './index.less'
import '../src/styles/index.less'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BackToTop)
Vue.use(util)
Vue.use(isui)
// 路由配置
const RouterConfig = {
  routes: Routers
}
if (Env !== 'local') {
  RouterConfig.mode = 'history'
}
const router = new VueRouter(RouterConfig)
let routerArr = [];
const isRouter = function (params, next, to) {
  if (params.includes(to.path)) {
    next()
  } else {
    router.push('/cn/quick-start')
  }
}
router.beforeEach((to, from, next) => {
  isui.LoadingBar.start();

  bus.loading = true;
  if (routerArr && routerArr.length !== 0) {
    isRouter(routerArr, next, to)
  } else {
    for (let i = 0; i < router.options.routes.length; i++) {
      routerArr.push(router.options.routes[i].path)
    }
    isRouter(routerArr, next, to)
  }

})

router.afterEach((to, from, next) => {
  isui.LoadingBar.finish();
  bus.loading = false;
  window.scrollTo(0, 0);
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

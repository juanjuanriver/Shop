// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from  'jquery'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
import store from './router/store/store.js'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(ElementUI);

//添加VueLazyload 选项
Vue.use(VueLazyload, {
  preLoad: 1.3,//预载高度比例
  error: '../static/images/new.jpg',
  loading: '../static/images/subcode.gif'
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

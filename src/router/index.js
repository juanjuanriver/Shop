import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Collections from '@/components/Collections'
import Login from '@/components/Login'
import News from '@/components/News'
import Shop from '@/components/Shop'
import Shopdesc from '@/components/Shopdesc'
import zhuce from '@/components/zhuce'
import shopcar from '@/components/shopcar'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/Collections',
      name: 'Collections',
      component: Collections
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path: '/News',
      name: 'News',
      component: News
    },{
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },{
      path: '/Shopdesc',
      name: 'Shopdesc',
      component: Shopdesc
    },{
      path: '/zhuce',
      name: 'zhuce',
      component: zhuce
    },{
      path: '/shopcar',
      name: 'shopcar',
      component: shopcar
    }
  ]
})

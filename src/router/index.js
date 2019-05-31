import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Collections from '@/components/Collections'
import Login from '@/components/Login'
import News from '@/components/News'
import Shop from '@/components/Shop'
import Shopdesc from '@/components/Shopdesc'
import zhuce from '@/components/zhuce'
import Cart from '@/components/Cart'
import newsdesc from '@/components/newsdesc'

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
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/newsdesc',
      name: 'newsdesc',
      component: newsdesc
    },
    {
      path:'/',
      redirect:'/index'
    }
  ]
})

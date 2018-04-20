import Vue from 'vue'
import Router from 'vue-router'
import foot from '@/components/foot'
import home from '@/components/mian/home'
import bar from '@/components/mian/bar'
import shopcar from '@/components/mian/shopcar'
import my from '@/components/mian/my'
import details from '@/components/details'
import login from '@/components/login/login'
import register from '@/components/login/register'
import search from '@/components/search'

import VueScroller from 'vue-scroller'  //引入上啦，下拉

Vue.use(VueScroller)    //

Vue.use(Router)

export default new Router({
	
  routes: [
   {path: '/',redirect: "home"},
    {path: '/foot',component: foot},  
    {path: '/home',component: home},
    {path: '/bar',component: bar},
    {path: '/shopcar/:num',component: shopcar},
    {path: '/my',component: my},
    {path: '/details/:yes',component: details},
    {path: '/login',component: login},
    {path: '/register',component: register}
  ]
})

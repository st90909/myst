// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios'
import foot from './components/foot'

axios.defaults.withCredentials=true  //允许入口文件引入axios

Vue.prototype.$axios=axios // 赋到原型上：以后在所有组件里面都可以this.$axios使用
                           //如果正常使用 每个组件 import axios from ‘axios’


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	components:{
		foot
	},
  el: '#app',
  router
 
})

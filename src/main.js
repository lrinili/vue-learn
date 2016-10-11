import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import vcomponet from '../components/routercomponet.vue'; //路由挂载的位置
import routerconfig from  './routercofnfig' 
import store from '../vuex/store.js'
  //拆分出的路由组件
Vue.use(VueRouter)
var router = new VueRouter();
router.start(vcomponet, '#enter')
router.map(routerconfig)
router.redirect({
	'/':'/home'
})
// new Vue({
//     el: 'body',
//     store:store
// })








// var Home=Vue.extend({
// 	template:'<div><h1>Home</h1><p>{{msg}}</p></div>',
// 	data:function(){
// 		return {
// 			msg:'hello, vue-router'
// 		}
// 	}
// })

// var About=Vue.extend({
// 	template:'<div>这是第二个组件</div>'
// })

// router.map({
//     '/home': { component: Home },
//     '/about': { component: About }
// })
//router.map(routerconfig)
// new Vue({
//     el: 'body',
//     components: {
//         app: App
//     }
// })

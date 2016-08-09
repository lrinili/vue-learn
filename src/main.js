import Vue from 'vue';
import app from './app.vue';

import VueRouter from 'vue-router';
import test1 from '../components/test1.vue';
import test2 from '../components/test2.vue';
Vue.component('app',app)



 Vue.use(VueRouter);

 var router = new VueRouter();
 router.map({
 	'/test1':{
 		component:test1
 	},
 	'/test2':{
 		component:test2
 	}
 })
 var App = Vue.extend({});

 router.start(App, '#test2')
 new Vue({
	el:'#nav',
	components:app
})





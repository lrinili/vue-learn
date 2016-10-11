
import home from '../components/home.vue';
import about from '../components/about.vue';
import news from '../components/news.vue';
import message from '../components/message.vue';

export default {
	'/home':{
		component:home,
		subRoutes:{
           '/news':{
           	component:news
           },
           '/message':{
           	component:message
           }
		}
	},
	'/about':{
		component:about
	}

}

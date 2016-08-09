import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
//     new Vue({
//         el: "body",
//         data: {
//             message: "hellso vue.js"
//         }
//     });
//     new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue.js!'
//   }
// })
//  var data = { message: 1,
//  a1:true,
//  b1:false,
//   list: [
//             { msg: 'Bruce Lee' },
//             { msg: 'Jackie Chan' },
//             { msg: 'Chuck Norris' },
//             { msg: 'Jet Li' },
//             { msg: 'Kung Fury' }
//         ],
//         query:'',
//  show:''  }
// var vm = new Vue({
//    el: '#app',
//   data: data
// })
// vm.message=2;
// data.message=3;
// vm.transition('fade', {
//   css: false,
//   enter: function (el, done) {
//     // 元素已被插入 DOM
//     // 在动画结束后调用 done
//     $(el)
//       .css('opacity', 0)
//       .animate({ opacity: 1 }, 1000, done)
//   },
//   enterCancelled: function (el) {
//     $(el).stop()
//   },
//   leave: function (el, done) {
//     // 与 enter 相同
//     $(el).animate({ opacity: 0 }, 1000, done)
//   },
//   leaveCancelled: function (el) {
//     $(el).stop()
//   }
// });
// // 定义
var data = {
    a: 1
}
var MyComponent = Vue.extend({
    data: function() {
        return { a: '111222221' }
    },
    props: ['msg'],
    template: '<div>{{a}}</h2>{{msg}}</h2></div>'
})

// 注册
Vue.component('my-component', MyComponent)

// 创建根实例



Vue.component('my-component2', {
    data: function() {
        return {
            a: 333,
            e: ''
        }
    },
    props: ['myMsg'],
    computed: {
        e: function() {
            return Date.now()
        }
    },
    methods: {
        showMsg: function(j) {
            alert(j)
        }
    },
    components: {
        'child': {
            props: ['msg'],
            data: function() {

                return {
                    a: 1,
                    chilMsg: 'child msg'
                }
            },
            methods: {
                brod: function() {
                    this.$dispatch('cms', this.chilMsg);
                    //alert(this.chilMsg)
                }
            },
            template: '#child'

            //template:'<button v-on:click="brod()">{{a}}</button><h3>{{msg}}</h3>'
        },

    },
    template: '<h3>这是my-component2{{e}}</h3><p>{{myMsg}}</p><child :msg="myMsg" v-on:cms="showMsg"></child>',

})



new Vue({
        el: '#example',
         
        

        
    })
    // new Vue({
    //   el: '#example',
    //     components: {
    //     'my-component2': {
    //     data: data,
    //  template:'<h3>这是{{a}}</h3>',

// },
//     'my-component':MyComponent
//   }

// })


var router = new VueRouter();
var Foo = Vue.extend({
    template: '#Foo'
})

var Bar = Vue.extend({
    template: '<p>This iseeee bar!</p>'
})
var App = Vue.extend({ template: '#app' })
router.map({
    '/foo': {
        component: Foo,
        subRoutes: {
            '/': {
                // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
                // 一个Bar组件
                component: Bar
            },
                        '/bar': {
                // 当匹配到/foo/bar时，会在Foo's <router-view>内渲染
                // 一个Bar组件
                component: {template:'zhessdaskd'}
            }
        }
    },
    '/bar': {
        component: Bar
    }
})
router.start(App, '#router')

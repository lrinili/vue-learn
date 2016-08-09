<script>
    //es6
    export default {
        
         //data:function(){}，下面是es6写法
         data () {
            return {
                name:"a.vue",
                no:"1.0.0"
            }
        }
    }
</script>
<template>
    <div id='app'>
        <h1>来自component a：{{name}}</h1>
        <h2>vison:{{no}}</h2>
    </div>
</template>
<style type="text/css">
    #app{
        color:red;
    }
</style>
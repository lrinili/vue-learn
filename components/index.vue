<template>
	<h2>Hello word! 这是componentsss</h2>
	<h3>{{name}}</h3>
	<button  class='btn btn-info' v-on:click='showFa'>显示父组件的属性</button>
</template>
<script type="text/javascript">
	export default{
		data:function(){
         return {
         	msg:'child component 1'
         }
		},
		props: ['name'],
		methods:{
			showFa:function(){
				this.$dispatch('child-msg','this.msg')
			}
		}
	}
</script>

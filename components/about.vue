<template>
	<h3>
	    vuex 测试案例！
	</h3>
  <div>
  	<display></display>
  	<increment></increment>
  </div>

</template>
<script type="text/javascript">
	import display from '../components/display.vue'
	import increment from '../components/increment.vue'
	export default{
		components:{
			display:display,
			increment:increment
		}
	}
</script>
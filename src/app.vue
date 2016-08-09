<script >
import ab from '../components/a';


export default {
	
	data:function(){
		return {
			msg:'这是vue测试页面'
		}
	},
	components:{
		'ab':ab
	}
}	
</script>
<template>
	<div id='test'>
	<h2>{{msg}}</h2>
		<ab></ab>
	</div>
 

</template>

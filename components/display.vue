<template>
	<div>
		<h3>count is {{num}}</h3>
	</div>
</template>
<script>
	import {getCount} from '../vuex/getter.js';
	export default {
		vuex:{
            getters:{
            	num:getCount
            }
		}
	}
</script>
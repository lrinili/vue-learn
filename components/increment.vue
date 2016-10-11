<template>
	<div>
		<button class="btn btn-info" @click='increment'>Increment+1</button>
	</div>
</template>
<script>
	import {incrementCounter }from '../vuex/action.js';
export default {
  vuex: {
    actions: {
      increment: incrementCounter
    }
  }
}
</script>
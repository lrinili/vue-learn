
<script>
	import Index from '../components/index.vue'
	export default {
		props:['names'],
		data:function(){
          return {
          msg:'这是father的msg'
          }
		},
		methods:{
			showMsg:function(){
				alert(this.$refs.cc1.msg);
				console.log(this.$children[0].name)
			}
		},
		events:{
          'child-msg':function(msg){
               console.log(msg)
          }
		},
		components:{
			
			Index
		}
	}
</script>
<template>
<div>
   <slot>如果没有分发内容，则显示slot中的内容</slot>
    <p>{{msg}}</p>
	<h2>{{names}}</h2>
	<button  class='btn btn-default' v-on:click='showMsg'>子组件的属性</button>
    <index name="nnnnn" v-ref:cc1 ></index>

<!--     <div id='searchTable'>
       <div class="container">
        <div class="form-group">
            <label>Search</label>
            <input type="text" class="search-input" v-model="searchQuery" />
        </div>
    </div>
    <div class="container">
        <simple :data-list="people" :columns="columns" :search-key="searchQuery">
        </simple>
    </div> 
    </div> -->
</div>
</template>
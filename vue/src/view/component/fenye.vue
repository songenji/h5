<template>
<div class="w100"> 
	<div class="auto">
	    <a @click='start' class='nomal'>首页</a>
		<a @click='goup' class='nomal' :class='{active:nowpage=="1"}'>上一页</a>
		<a v-for='val in nowshow' @click='changepage(val)' :class='{show:val==nowpage}' class='number'>{{val}}</a>	
		<a @click='godown' class='nomal' :class='{active:nowpage==zong}'>下一页</a>
		<a @click='end' class='nomal'>尾页</a>
		
		<span style="margin:0 4px;letter-spacing: 1px; ">当前第{{ page }}页/共{{zong}}页转到</span>
		<input type="text" v-model.trim='jump' style="text-align:center;"/>
		<a @click='changepage(jump)' class='nomal'>跳转</a>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				zong:10,//总页码			
				nowpage:1,//当前页码
				jump:1,//输入框的jump
			}
		},
		computed:{
			zong:function(){
				console.log(this.page);
				return this.zong=this.page==0?1:this.page;
			},
			yema:function(){
				var arr=[];
				for(var i=1;i<=this.zong;i++){
					arr.push(i);
				}
				return arr;
			},
			nowshow:function(){
				var thisshow='';
				if(this.nowpage<=3){
					thisshow=this.yema.slice(0,5);
				}else if(this.nowpage>=3&&this.nowpage<=this.yema.length-2){
					thisshow=this.yema.slice(this.nowpage-3,this.nowpage+2);
				}else if(this.nowpage>this.yema.length-2){
					thisshow=this.yema.slice(-5);
				}
				return thisshow;
			}
		},
		methods:{
			changepage:function(now){
				this.nowpage=parseFloat(now);
				this.jump=this.nowpage;
			},
			goup:function(){
				if(this.nowpage>1){
					this.nowpage=this.nowpage-1;
					this.jump=this.nowpage;
				}
			},
			godown:function(){
				if(this.nowpage<this.zong){
					this.nowpage=this.nowpage+1;
					this.jump=this.nowpage;
				}
			},
			start:function(){
				
			},
			end:function(){
				
			},
			
		},
		watch:{
			"jump":function(valNew,valOld){
				if(isNaN(valNew)){
					this.jump=valOld;
				}else if(valNew>this.zong){
					this.jump=valOld;
				}
			}
		}
	}
</script>
<style scoped>
.w100{
width:100%;
background:#ffffff;
padding:10px 0;
clear:both;
overflow:auto;
}
.auto{
width:760px;
float:right;
font-size:12px;
}
	.active{
		opacity:0.5;
	}
	a{
		cursor:pointer;
		color:#292929;
		background:#ffffff;
	}
	.nomal{
		padding:5px;
		border:1px solid #ccc;
		border-radius:3px;
	}
	.number{
		padding:5px 10px;
		border:1px solid #ccc;
		border-radius:3px;
		margin:0 3px;
	}
	.show{
		border:0;		
	}
	input{
		width:20px;
	}
</style>
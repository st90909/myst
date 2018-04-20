<template>
	<div class="big">
		<div class="box">
			<img src="../../../static/img/xiang.png"/>
		</div>
		<!---->
		<div class="ah-img" v-for='v in arr'>
			<div class="title">
				<div class="t-img"><img :src="v.company_logo"/></div>
				<div class="t-font">{{v.shopname}}</div>
				<div class="t-to"><img src="../../../static/img/to.png"/></div>
			</div>
			<div class="ah-list" v-for="x in v.shopItemList">
					<img :src="x.img"/>		
			</div>
		</div>
		
		
		
		<!--<div class="ah-img">
			<img src="../../../static/img/ah.png"/>
			<div class="ah-list">
				<img src="../../../static/img/one.png"/>
				<img src="../../../static/img/one.png"/>
			</div>
		</div>
		<div class="ah-img">
			<img src="../../../static/img/ah.png"/>
			<div class="ah-list">
				<img src="../../../static/img/one.png"/>
				<img src="../../../static/img/one.png"/>
			</div>
		</div>-->
	</div>
</template>

<script>
	import foot from '../foot'
	export default {
		components:{foot},
		data(){
			return {
				arr:[],
				imgs:[],
				images:[]
			}
		},
		mounted(){
			var that=this;
			this.$axios({
				url:'../../../static/json/json03.json',
				method:'get',				
			}).then(function(res){
//				console.log(res.data)
//				console.log(res.data.shopItemList)
				that.arr=res.data
				for(var i=0;i<res.data.length;i++){
					res.data[i].shopItemList		
//					res.data[i].shopItemList[i][0].img					
					that.imgs.push(res.data[i].shopItemList)						
				}
				
//				for(var j=0;j<that.imgs.length;j++){
//						that.images.push(that.imgs[j][0].img)
//					}
				console.log(that.imgs)
				console.log(that.images)
				that.imgs=res.data.shopItemList
				
			})
		}
		
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	.title{
		width: 100%;height:150px;border-bottom: 1px solid #BBBBBB;
		display: flex;justify-content: space-around;
		font-size: 52px;margin-top: 25px;
	}
	.t-font{
		width: 500px;height: 89px;border-left: 1px solid #111;
		padding-left: 78px;box-sizing: border-box;line-height: 89px;
	}
	.t-to img{
		width: 75px;margin-top: 20px;
	}
	.t-img{
		width: 120px;height: 120px;border-radius: 50%;border: 1px solid #111;
		overflow: hidden;
	}
	.t-img img{
		width:120px ;
	}
	.big{
		background: #eee;
	}
	.box{
		width: 100%;height: 470px;
		margin-bottom: 35px;
	}
	.box img{
		width:1080px;
	}
	.ah-img{
		width: 100%;overflow: hidden;background: #fff;
	}
	.ah-list{
		background: #fff;
		width: 100%;height: auto;
	}
	.ah-list img{
		width: 300px;height: 300px;float: left;margin: 20px;border-radius: 20px;
	}
	.ah-list:first-child{
		margin-top: 30px;
	}
</style>
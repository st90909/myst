<template>
	<div class="warp">
		<div class="car-top">
			<p>购物车</p>
		</div>
		<div class="not">
			<router-link to="/">继续逛逛</router-link>
		</div>
		<!---->
		<div class="shop-box" v-for='(v,i) in arr'>
			<table >
				<thead>
					<tr>
						<td><div class="choose"  ></div><span>{{v.mingzi}} ></span></td>
					</tr>
				</thead>
				<tbody>
					<tr class="mian">						
							<td><img :src="v.imgsrc"/>
							
							    <div class="shop-font">
									<p>{{v.miaoshu}}</p>
									<!--<div class="wei">口味:<i>羊排</i></div>-->
									<div class="price">￥<span>{{v.jiage}}</span></div>
								</div>
							</td>		
					</tr>
					<tr class="link">
						<div class="choose" :style="dd" ></div>
						<div class="count">
							<div class="reduce" @click='reduce(v)'>-</div><span>{{v.count}}</span><div class="add" @click='addCpu(v)'>+</div>
						</div>
					</tr>
				</tbody>
			</table>
		</div>	
		<!--结算-->
		<div class="close">
			<div class="close-l">
				<div class="choose-all" @click='chooseAll()'></div><p>全选</p>
			</div>
			<div class="total">
				<div class="one">合计：</div>
				<div class="one color">
				   ￥<span>{{tots}}</span>
				   <p class="he">不含运费</p>
				</div>
				<div class="total-r">结算</div>
			</div>
		</div>
		<!---->
		<div class="nothing"></div>
		
		
	</div>
</template>

<script>
	import foot from '../foot'
	import store from '@/vuex/store'
	export default {
		store,
		components:{foot},
		data(){
			return {
				price:null,
				allPrice:100,
				count:1,
				dd:{
					"background":"white"
				},
				flge:true,
				arr:[],
				all:null,
				tot:0
				
			}
		},
		mounted:function(){
//			this.tot=this.$store.state.zongjia;
//			var choseAll=document.getElementsByClassName('choose');
//					console.log(choseAll)
//					var num=0;
//				for(var i=0;i<choseAll.length;i++){
//					choseAll[i].index=i;
//					
//					choseAll[i].addEventListener("click",function(){
//						console.log(111)
//						
//						if(num%2==0){
//							choseAll[this.index].style.background="#ab2126";
//						}else{
//							choseAll[this.index].style.background="white";
//						}						
//						num++
//					})
//				};		
				
				
				
//			var that=this;
//			var pid=this.$route.params.num
//			this.$axios({
//				url:'../../static/json/json01.json',
//				method:'get'
//				
//			}).then(function(res){
//				res.data
//				console.log(res.data)
//				for(var i=0;i<res.data.length;i++){
//					if(res.data[i].goods_id==pid){
//						that.arr.push(res.data[i])
//						that.price=res.data[i].shop_price
//					}
//				}
//				console.log(that.arr)
//			})
			
			this.arr=this.$store.state.list
			for(var k=0;k<this.arr.length;k++){
				this.price=this.arr[k].jiage
				this.all=this.arr[k].zongjia 
				this.count=this.arr[k].count
			}
			
//			for(var j=0;j<this.$store.state.total.length;j++){
//				
//			}

//			this.price=parseInt(this.$store.state.list.jiage)
//			console.log(this.$store.state.list.jiage)
				
		},
		methods:{
			chooseAll(){
				var choseAll=document.getElementsByClassName('choose');
				var chose=document.getElementsByClassName('choose-all')[0];
						    
//				for(var i=0;i<choseAll.length;i++){
//					choseAll[i].style.background='#ab2126'
//				}				
				if(this.flge){
					chose.style.background='#ab2126';
					for(var i=0;i<choseAll.length;i++){
					choseAll[i].style.background='#ab2126';
					
				 }		
				 this.flge=false;
				}else{
					chose.style.background='white';
					for(var i=0;i<choseAll.length;i++){
					choseAll[i].style.background='#fff'
					
				  }
					this.flge=true;
				}				
			},
			choose(i){
//				var choose=document.getElementsByClassName('choose')[0];
					for(var j=0;j<this.arr.length;j++){
						
					}
			},
				addCpu(v){
//					this.count+=1
					this.$store.commit('add',v.pid)
					this.$store.commit('getTotal')
				},
				reduce(v){
//					this.count-=1
//					if(this.count<1){
//						this.count=1
//					}
					this.$store.commit('min',v.pid)
					this.$store.commit('getTotal')
				}			
	},
	computed:{
		cupPrice:function(){
			//返回的是属性， 依赖于其他值的变化
					return this.all*this.count
                    
			},
		tots(){
			return this.$store.state.zongjia;
		}
	 }
}
</script>

<style scoped>
	*{list-style: none;text-decoration: none;}
	.warp{
		background: #eee;
	}
	.car-top{
		width: 100%;height: 128px;background: #fff;text-align: center;
		font-size: 55px;font-weight: bold;line-height: 128px;
		border-bottom: 1px solid #eee;
	}
	.not{
		width: 840px;height: 120px;border: 1px solid #b13438;
		text-align: center;line-height:  120px;margin: 100px auto;		
	}
	.not *{
		color: #b13438;
	}
	/*表格*/
	table{
		background: #fff;width: 100%;margin-bottom: 35px;
	}
	.choose{
		width: 75px;height: 75px;border: 2px solid #aaa;
		border-radius: 50%;
	}
	.choose-all{
		width: 75px;height: 75px;border: 2px solid #aaa;
		border-radius: 50%;
	}
	thead span{
		display: block;width: 300px;height: 84px;border:2px solid #dd8a1f;
		text-align: center;line-height:84px;color: #dd8a1f;margin-left: 37px;
	}
	/*thead>tr{
		border-bottom: 2px solid #000;height: 150px;
	}*/
	thead tr td{
		height: 130px;display: flex;margin-top: 40px;border-bottom: 2px solid #eee;
	}
	.mian img{
		width: 300px;height: 300px;
	}
	.mian td{
		display: flex;
	}
	.shop-font{
		font-size: 48px;margin-left: 35px;
	}
	.shop-font .wei{
		color: #aaa;
	}
	.shop-font i{
		font-style: normal;
	}
	.link{
		display: flex;justify-content: space-between;
	}
	.count{
		width: 360px;height: 90px;border: 1px solid #222;
		display: flex;line-height:90px;	font-size: 48px;text-align: center;
	}
	.count .reduce ,.count .add{
		width: 90px;height: 100%;
	}
	.count span{
		width: 178px;height: 100%;border-left: 1px solid #333;border-right: 1px solid #333;
	}
	.price{
		margin-top: 75px;
	}
	/*结算*/
	.close{
		width: 100%;height: 165px;position:fixed;background: #fff;
		bottom:150px;display: flex;justify-content: space-between;z-index: 99;
	}
	.close .close-l{
		display: flex;margin-top: 35px;line-height: 80px;font-size: 48px;		
	}
	.close .close-l p{
		margin-left: 30px;
	}
	.close .total{
		display: flex;
	}
	.total .total-r{
		width: 300px;height: 100%;text-align: center;line-height: 165px;
		background: #ab2126;color: #fff;font-size: 58px;margin-left: 20px;
	}
	.total .one{
		margin-top: 30px;font-size: 48px;
	}
	.he{
		font-size: 36px;color: #aaa;
	}
	.color{
		color: #ab2126;
	}
	.nothing{
		width: 100%;height: 215px;
	}
</style>
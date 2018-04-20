<template>
	<div class="warp">
		<div class="top">
			<div><router-link to='/'><img src="../../static/img/back.png"/></router-link></div>
			<div>商品详情</div>
			<div><img src="../../static/img/share.png"/></div>
		</div>
		<!---->
		
		<!---->
		<div class="swiper-container swiper222">
			<!--swiper-wrapper(wrapper,包装纸,封套 ) 定义 swiper轮播图片打包的盒子-->
			<div class="swiper-wrapper">
				<!--swiper-slide 定义 Swiper滑动的内容-->
				<div class="swiper-slide"><img :src="obj.goods_thumb" alt="" /></div>
				<div class="swiper-slide"><img :src="obj.goods_thumb" alt="" /></div>
				<div class="swiper-slide"><img :src="obj.goods_thumb" alt="" /></div>
			</div>
			<!--分页器 （小圆点）-->
			<!--swiper-pagination 定义 Swiper 分页器--> 
			<div class="swiper-pagination"></div>			
			<!--swiper 的 前进按钮 和 后退按钮-->
		</div>
		<!---->
		<div class="des-box">
			<div class="des-mian"><p>{{obj.name}}</p></div>
			<div class="des-minor"><span>{{obj.shop_name}}</span></div>
			<div class="des-price">￥<span>{{obj.shop_price}}</span></div>
		</div>
		<!---->
		<div class="number-box">
			<div class="num-b">
				<span></span>
				<p>货号：</p>
				<div>123456</div>
			</div>
		</div>
		<!---->
		<div class="up"><img src="../../static/img/up.png"/></div>
		<!---->
		<div class="more">
			<div class="one">
				<span class="iconfont" style="padding-left: 10px;">&#xe654;</span>
				<p>购物车</p>
			</div>
			<div class="one">
				<span class="iconfont" style="padding-left: 5px;">&#xe895;</span>
				<p>店铺</p>
			</div>
			<div class="one">
				<span class="iconfont" style="padding-left: 5px;">&#xe623;</span>
				<p>客服</p>
			</div>
			<div class="add-shop">
			     加入购物车
			</div>
			<div class="now" @click='tocar()'>
			     立即购买
			</div>
			
		</div>
			
	</div>
</template>

<script>		
//	import Swiper from '../../static/swiper'
    import store from '@/vuex/store'
	export default {
		store,
		data(){
			return {
				arr:[],
				obj:{}
			}
		},
		methods:{
			tocar(){
				
				window.location.href='#/shopcar/'+this.$route.params.yes
				this.$store.commit('footcover','flex')
			},
			come(){
				
				
				
			}
			
		},
		
		mounted(){
			this.$store.commit('footcover','none')
			
//			this.$axios({
//				url:'../../../static/json/json01.json',
//				method:'get',
//			}).then(function(res){
//				
//			})
            var that=this;
			var pid=this.$route.params.yes
//			this.obj=this.$store.state.obj1
//			console.log(this.$store.state.obj1)
			this.$axios({
				url:'../../static/json/json01.json',
				method:'get'
				
			}).then(function(res){
				res.data
				console.log(res.data)
				for(var i=0;i<res.data.length;i++){
					if(res.data[i].goods_id==pid){
						that.obj=res.data[i]
					}
				}
				console.log(that.obj)
			})
			
			
			
			
				var oSwiper=new Swiper(".swiper222",{
						autoplay:3000,									
						speed:3000,
						loop:true,
						effect:"slide",
						pagination:'.swiper-pagination',
						paginationClickable:true,
						prevButton:".swiper-button-prev",
						nextButton:".swiper-button-next",
						autoplayDisableOnInteraction:false,
						observer:true,//修改swiper自己或子元素时，自动初始化swiper
			    	    observeParents:true//修改swiper的父元素时，自动初始化swiper
			  	})
	    }
	}
</script>

<style scoped>
/*	@import url("../../static/swiper.css");*/
	*{margin: 0;padding: 0;background: #fff;}
	.warp{background: #eee;}
	.top{
		width: 100%;height: 132px;border-bottom: 1px solid #eee;
		display: flex;justify-content: space-around;padding-top: 32px;box-sizing: border-box;
	}	
	.top img{
		width: 79px;height: 68px;
	}
	.swiper-slide img{
		width: 1080px;
	}
	/**/
	.des-box{
		width:100%;min-height: 605px;border-bottom: 1px solid #aaa;
		padding: 75px;box-sizing: border-box;text-align: center;
	}
	.des-mian{
		font-size: 58px;
	}
	.des-minor{
		font-size: 48px;color: #aaa;margin-top: 50px;margin-bottom: 70px;
	}
	.des-price{
		color: #ab2126;
	}
	/*号*/
	.number-box{
		width: 100%;height: 120px;overflow: hidden;
	}
	.num-b{
		display: flex;line-height: 55px;margin-left: 85px;
		margin-top: 38px;
	}
	.num-b span{
		display: block;width: 17px;height: 17px;border-radius: 50%;
		background: #ab2126;margin-top: 20px;margin-right: 30px;
	} 
	/**/
	.up{
		margin-top: 35px;
	}
	.up img{
		width: 1080px;
	}
	/**/
	.more{
		width: 100%;height: 160px;background:#fff;display: flex;
	}
	.one{
		text-align: center;width: 179px;border-right: 1px solid #111;
		height: 100px;margin-top: 20px;
	}
	.one p{
		border-right: 1px solid #111;
	}
	.add-shop{
		width: 270px;background: #dd8a1f;font-size: 45px;color: #fff;
		text-align: center;line-height: 160px;
	}
	.now{
		width: 270px;font-size: 45px;color: #fff;background: #ab2126;
		text-align: center;line-height: 160px;
	}
</style>
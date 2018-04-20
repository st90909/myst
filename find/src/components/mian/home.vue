<template>
	<div class="big">
		<div class="top_box">
			<p>追味寻源</p>
			<span class="search iconfont" style="font-size: 30px;">&#xe653;</span>
		</div>
		<!--轮播-->
		<div class="swiper-container">
			<!--swiper-wrapper(wrapper,包装纸,封套 ) 定义 swiper轮播图片打包的盒子-->
			<div class="swiper-wrapper">
				<!--swiper-slide 定义 Swiper滑动的内容-->
				<div class="swiper-slide" v-for='v in banner'>
					<img :src="v.ad_code" alt="" />					
				</div>				
			</div>
			<!--分页器 （小圆点）-->
			<!--swiper-pagination 定义 Swiper 分页器--> 
			<div class="swiper-pagination"></div>						
		</div>
		<!--导航-->
		<div class="nav">
			<div class="list-one" v-for='v in nav'>
				<div class="nav-img"><img v-bind:src="v.ad_code"/></div>
				<p>{{v.ad_name}}</p>
			</div>
		</div>
		<!--专区-->
		<div class="division">
			<div class="img-box" v-for='v in prefecture'>
				<img :src="v.ad_code"/>
			</div>
			
		</div>
		<!--超级品牌-->
		<div class="super">
		     <div class="title-img"><img src="../../../static/img/suimg.png"/></div>
		     <div class="super-img" v-for='v in supers'>
		     	<img :src="v.ad_code"/>
		     </div>
		     
		</div>
		<!--特色区域-->
		<div class="feature-box">
			<div class="title-img"><img src="../../../static/img/te.png"/></div>
			<div class="super-img" v-for='v in areas'>
		     	<img :src="v.ad_code"/>
		     </div>
		     
		</div>
		<!--热销商品-->
		<div class="hot-sell-box">
			<div class="title-img"><img src="../../../static/img/hot.png"/></div>
			<div class="list-bigbox">
				<div class="list" v-for='(v,i) in shoplist' @click='todes(v)'>
					<div class="list-img"><img :src="v.goods_thumb"/></div>
					<div class="list-font">
						<p>{{v.name}}</p>
						<div class="list-price"><i>￥</i><span>{{v.shop_price}}</span></div>
					</div>
				</div>				
			</div>
		</div>
		
		
		
		<!--<foot></foot>-->
	</div>
</template>

<script>
	import foot from '../foot'
	import store from '@/vuex/store'
//	import Swiper from '../../../static/swiper'
	export default {
		store,
		components:{foot},
		data(){
			return {
				shoplist:[],
				banner:[],
				nav:[],
				prefecture:[],
				supers:[],
				areas:[]
			}
		},
		methods:{
			
			aa(){
				window.location.href='#/details'
			},
			todes(v){				
				this.$store.state.getList(v.goods_id)
				window.location.href='#/details/'+v.goods_id
			}
		},
		mounted(){		
			this.$store.commit('footcover','flex');
			var that=this
			this.$axios({
				url:'../../../static/json/json01.json',
				method:'get',
			}).then(function(res){				
				that.shoplist=res.data				
			})
			//
			this.$axios({
				url:'../../../static/json/json02.json',
				method:'get',
			}).then(function(res){
				console.log(res.data)				
				that.banner=res.data.adsList //轮播
				that.nav=res.data.categoryList //导航
				that.prefecture=res.data.specList//专区
				that.supers=res.data.brandData.brandList//超级品牌
				that.areas=res.data.actData.actList //
			})
	   }
	}
</script>

<style scoped>
	/*@import url("../../../static/swiper.css");*/
	
*{margin: 0;padding: 0;}
.big{
		background: #eee;
	}
.top_box{
	width: 100%;height: 132px;font-size:60px;font-family: "楷体";
	text-align: center;line-height: 132px;position: relative;	
	background: #fff;
}
.search{
	position: absolute;right: 20px;top:0;	
	font-size: 80px;width: 77px;height: 70px;
}
/*.swiper-slide{
	width: 750px;
}*/
.swiper-slide img{
	width: 1080px;height: 470px;
}

.nav{
	width: 100%;margin-top: 35px;margin-bottom: 35px;
	height:358px;background: #fff;display: flex;justify-content: flex-start;
	flex-wrap: wrap;font-size: 35px;
}
.list-one{
	width: 25%;height: 50%;display: flex;line-height: 150px;
	color:#555;
}
.nav-img{
	margin-left: 80px;margin-top: 10px;
}
.nav-img img{
	width: 60px;
}
.division{
	width: 100%;height: 420px;background: #fff;margin-bottom: 35px;
	display: flex;justify-content: space-around;
}
.img-box{
	width: 20%;margin-top:100px;
}
.img-box img{
	width:100%;
}
/*超级品牌*/
.super{
	width: 100%;
	min-height: 1000px;margin-bottom: 35px;background: #fff;
}
.title-img{
	width: 1000px;margin: 0 auto;
}
.title-img img{
	width: 1000px;
}
.super-img{
	width: 1000px;margin: 0 auto;
	height: auto;
}
.super-img img{
	width: 1000px;
}
/*区域特色*/
.feature-box{
	width: 100%;background: #fff;
	margin-bottom: 35px;
}

/*热销商品*/
.hot-sell-box{
	width: 100%;height: auto;
	background:#fff;
	
}
.list-bigbox{
	width: 100%;height: auto;
	display: flex;flex-wrap: wrap;
	justify-content: space-around;
}
.list{
	width:500px;
}
.list-img{
	width: 500px;
	
}
.list-img img{
	width: 500px;
}
.list-price{
	width: 100%;
	text-align: center;
	color: #ab2126;
}
.list-price i{
	font-style: normal;
	
}


</style>
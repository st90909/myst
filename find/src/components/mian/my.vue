<template>
	<div class="box">
		<div class="top_box">
			<p>个人中心</p>
			<span class="qe iconfont " style="font-size: 30px;">&#xe6bd;</span>
		</div>
		<div class="not"></div>
		<!---->
		<div class="user">
			<div class="mindden">
				<div class="buddha"></div>
				<p @click='login()'>{{this.$store.state.users}}</p>
			</div>
		</div>
		<!--全部订单-->
		<div class="indent">
			<p>全部订单</p><span>></span>
		</div>
		<!---->
		<div class="sell">
			<div class="sell-one"> 
				<p class="iconfont">&#xe636;</p>
				<p>待付款</p>
			</div>
			<div class="sell-one"> 
				<p class="iconfont font-18">&#xe669;</p>
				<p>待发货</p>
			</div>
			<div class="sell-one"> 
				<p class="iconfont">&#xe608;</p>
				<p>待收货</p>
			</div>
			<div class="sell-one"> 
				<p class="iconfont">&#xe610;</p>
				<p>退款/售后</p>
			</div>
		</div>
		<!--钱袋-->
		<div class="all">
			<div class="purse">
			<div class="circle">
				<span class="iconfont">&#xe67d;</span>				
			</div>
			<span>我的钱袋</span>
		  </div>
		  <div>></div>
		</div>
		<!---->
		<div class="all-one">
			<div class="purse">
			<div class="circle">
				<span class="iconfont">&#xe637;</span>				
			</div>
			<span>我的优惠劵</span>
		  </div>
		  <div>></div>
		</div>
		<div class="all-one">
			<div class="purse">
			<div class="circle">
				<span class="iconfont">&#xe62b;</span>				
			</div>
			<span>我的小店</span>
		  </div>
		  <div>></div>
		</div>
		<div class="all-one">
			<div class="purse">
			<div class="circle">
				<span class="iconfont">&#xe6a8;</span>				
			</div>
			<span>我的皇榜</span>
		  </div>
		  <div>></div>
		</div>
		<div class="all-one">
			<div class="purse">
			<div class="circle">
				<span class="iconfont">&#xe607;</span>				
			</div>
			<span>收货地址</span>
		  </div>
		  <div>></div>
		</div>
		<div class="all-one">
			<div class="purse">
			<div class="circle">
				<span class="iconfont">&#xe78a;</span>				
			</div>
			<span>设置</span>
		  </div>
		  <div>></div>
		</div>
		
	</div>
</template>

<script>
	import store from '@/vuex/store'
	export default {
		store,
	data(){
		return {}
	},
	methods:{
		login(){
			window.location.href='#/login'
		}
	}
	

}
</script>

<style scoped> @import url("../../../static/swiper.css");
 * {
 	margin: 0;
 	padding: 0;
 }
 
 .box {
 	background: #eee;
 }
 
 .box * {
 	background: #fff;
 }
 
 .top_box {
 	width: 100%;
 	height: 132px;
 	font-size: 60px;
 	top: 0;
 	text-align: center;
 	line-height: 132px;
 	position: fixed;
 	border-bottom: 1px solid #E0E0E0;
 }
 
 .qe {
 	position: absolute;
 	right: 20px;
 	top: 0;
 	font-size: 80px;
 	width: 77px;
 	height: 70px;
 }
 
 .iconfont {
 	/*font-size: 16px;*/
 	font-weight: 100;
 	padding-left: 0;
 	-webkit-text-stroke-width: 0;
 }
 /*.font-18{
	font-size: 60px;
}*/
 
 .not {
 	width: 100%;
 	height: 133px;
 }
 /**/
 
 .user {
 	overflow: hidden;
 	width: 100%;
 	height: 600px;
 	background: rgba(60, 60, 60, 0.7);
 }
 
 .mindden {
 	width: 250px;
 	height: 350px;
 	margin: 140px auto 0;
 	text-align: center;
 	font-size: 42px;
 	color: #fff;
 	background: rgba(250, 250, 250, 0);
 }
 
 .mindden p {
 	background: rgba(250, 250, 250, 0);
 }
 
 .buddha {
 	width: 240px;
 	height: 240px;
 	border-radius: 50%;
 	background: skyblue;
 }
 /**/
 
 .indent {
 	width: 100%;
 	height: 150px;
 	border-bottom: 1px solid #ccc;
 	font-size: 48px;
 	color: #333;
 	display: flex;
 	justify-content: space-between;
 	line-height: 150px;
 	box-sizing: border-box;
 	padding-left: 30px;
 	padding-right: 30px;
 }
 
 .sell {
 	width: 100%;
 	height: 235px;
 	border-bottom: 1px solid #ccc;
 	overflow: hidden;
 	text-align: center;
 	display: flex;
 }
 
 .sell-one {
 	width: 25%;
 	height: 116px;
 	border-right: 1px solid #ccc;
 	margin-top: 47px;
 	background: darkcyan;
 }
 /*钱袋*/
 
 .all {
 	width: 100%;
 	height: 150px;
 	margin-top: 35px;
 	text-align: center;
 	overflow: hidden;
 	line-height: 150px;
 	display: flex;
 	justify-content: space-between;
 	font-size: 48px;
 	color: #333;
 	margin-bottom: 35px;
 	box-sizing: border-box;
 	padding-left: 30px;
 	padding-right: 30px;
 }
 
 .purse {
 	width: 400px;
 	height: 150px;
 	overflow: hidden;
 	display: flex;
 }
 
 .circle {
 	width: 88px;
 	height: 88px;
 	border: 2px solid #ab2126;
 	border-radius: 50%;
 	margin-top: 29px;
 	line-height: 88px;
 	color: #ab2126;
 	margin-right: 40px;
 }
 /**/
 
 .all-one {
 	width: 100%;
 	height: 150px;
 	text-align: center;
 	overflow: hidden;
 	line-height: 150px;
 	display: flex;
 	justify-content: space-between;
 	font-size: 48px;
 	color: #333;
 	border: 1px solid #eee;
 	box-sizing: border-box;
 	padding-left: 30px;
 	padding-right: 30px;
 }





</style>
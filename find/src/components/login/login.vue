<template>
	<div>
		<div class="top">
			<div @click='back()'><img src="../../../static/img/back.png"/></div>
			<div @click='reg()'>注册</div>			
		</div>
		<div class="zhui">追味寻源</div>
		<form action="">
			<div class="login-box">
				<div class="use">
					<span class="iconfont">&#xe660;</span>
					<input type="text" placeholder="手机号/邮箱/用户名" v-model='users'/>
				</div>
				
				<div class="use">
					<span class="iconfont">&#xe605;</span>
					<input type="password" placeholder="请输入密码" v-model='password'/>
				</div>
				<div class="view">
					<input type="text" class="input"/>
					<p class="shu code">{{yanzheng}}</p>		
					<input type = "button" value = "换一张" class="btn"/> 
					
				</div>
				<div class="forget">忘记密码?</div>
				<input type="submit" value="登录" class="sub"/>
			</div>
		</form>
		<div class="shade" v-if='hidden'>
			<p>{{font}}</p>
			<button @click='cover()'>确定</button>
		</div>
		
		
		
	</div>
</template>

<script>
	import store from '@/vuex/store'
export default {
	store,
	data() {

		return {
			users: '',
			password: '',
			yanzheng:'RN7G',
			hidden:false,
			font:''
		}
	},
	methods: {
		reg() {
			window.location.href = '#/register'
		},
		login() {
			this.$store.commit('footcover','flex')
			window.location.href = '#/my';
			
		},
		cover(){
			this.hidden=false;
		},
		back(){
			this.$store.commit('footcover','flex')
			window.history.back(-1)
		}
	},
	mounted() {
		this.$store.commit('footcover','none')		
		//
//		var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'N', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '9', '8', '7', '6', '5', '4', '3', '2', '1']
//		var view = document.getElementsByClassName('btn')[0];
//		var pp = document.getElementsByClassName('shu')[0];
//		view.onclick = function() {
//			Matn.ceil(Math.random() * 4)
//			for(var i = 0; i < arr.length; i++) {
//
//			}
//
//		}
		//

		var code; //在全局定义验证码 
		//产生验证码 
		var that=this
		function createCode() {
			code = "";
			var codeLength = 4; //验证码的长度 
			var checkCode = document.getElementsByClassName("code")[0];
			var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
				'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //随机数 
			for(var i = 0; i < codeLength; i++) { //循环操作 
				var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35） 
				code += random[index]; //根据索引取得随机数加到code上 
			}
			 that.yanzheng= code; //把code值赋给验证码 
		}
		//校验验证码 
		var btn=document.getElementsByClassName('btn')[0]
		btn.onclick=function(){
			createCode(); //刷新验证码 
			document.getElementsByClassName("input")[0].value = ""; //清空文本框 
		}
		var goo=document.getElementsByClassName("input")[0];
//		var inputCode = goo.value.toUpperCase();
		goo.onblur=function(){
			if(goo.value.length <= 0) { //若输入的验证码长度为0 
				 //则弹出请输入验证码 
				 that.font='请输入验证码'
				 that.hidden=true
			} else if(goo.value.toUpperCase() != code) { //若输入的验证码与产生的验证码不一致时 
				 //则弹出验证码输入错误 
				createCode(); //刷新验证码 
				goo.value = ""; //清空文本框 
				that.font='验证码输入错误 '
				that.hidden=true
			} else { //输入正确时 
				
			}
		}
		
//		btn.onclick=function(){
//			var inputCode = document.getElementsByClassName("input")[0].value.toUpperCase(); //取得输入的验证码并转化为大写 
//			if(inputCode.length <= 0) { //若输入的验证码长度为0 
//				alert("请输入验证码！"); //则弹出请输入验证码 
//			} else if(inputCode != code) { //若输入的验证码与产生的验证码不一致时 
//				alert("验证码输入错误！@_@"); //则弹出验证码输入错误 
//				createCode(); //刷新验证码 
//				document.getElementsByClassName("input")[0].value = ""; //清空文本框 
//			} else { //输入正确时 
//				alert("^-^"); //弹出^-^ 
//			}
//		}
		//
		this.users = this.$store.state.users
		this.password = this.$store.state.pass
		var sub = document.getElementsByClassName('sub')[0];
		var that = this;
		sub.onclick = function() {
			if(/^[1][3,4,5,7,8][0-9]{9}$/.test(that.users) && /^\d{6,}$/.test(that.password)&&goo.value!='') {
				that.$store.commit('footcover','flex')
				window.location.href = '#/my'
			} else {
                that.font="用户名或密码错误"
				that.hidden=true
			}
		}
	}
}</script>

<style scoped>
	.top {
	width: 100%;
	height: 150px;
	display: flex;
	justify-content: space-between;
	padding: 70px;
	box-sizing: border-box;
	font-size: 58px;
	font-weight: 600;
}

.top img {
	width: 65px;
	margin-top: 20px;
}

.zhui {
	width: 100%;
	height: 312px;
	text-align: center;
	line-height: 312px;
	font-size: 130px;
}

.login-box {
	width: 100%;
	height: 800px;
}

.use {
	width: 900px;
	margin: 50px auto;
}

.use input {
	width: 790px;
	border: none;
	border-bottom: 1px solid #aaa;
	outline: none;
}
.input{
	margin-left: 50px;width: 200px;
}
.view {
	width: 900px;
	display: flex;
	justify-content: space-between;
	margin: 50px auto;
}

.iconfont {
	padding-left: 5px;
}

.forget {
	float: right;
	margin-right: 80px;
	margin-bottom: 20px;
}

input[type=submit] {
	width: 900px;
	height: 135px;
	background: #ab2126;
	display: block;
	border: none;
	border-radius: 10px;
	margin: 0 auto;
	color: #fff;
}
.shade{
	position: absolute;top: 500px;left: 250px;color: #AB2126;
	width: 600px;height: 300px;background: rgba(0,0,0,0.8);
	text-align: center;padding-top: 130px;
}
.shade button{
	margin-top: 50px;border: none;
	width: 200px;
}
</style>
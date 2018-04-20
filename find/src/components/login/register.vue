<template>
	<div>
		<div class="top">
			<div @click='back()'><img src="../../../static/img/back.png"/></div>
			<div>快速注册</div>
			<div @click='togo()'>登录</div>			
		</div>
		
		<form  >
			<div class="login-box">
				<div class="use">
					<span>+86 </span><input type="text" v-model='user' placeholder="手机号/邮箱/用户名"/>
					<i class="orr">{{orr}}</i>
					<u class="err">{{err}}</u>
				</div>
				<div class="use">
					<span class="iconfont">&#xe605;</span>
					<input type="password" placeholder="请输入密码" v-model='view'/>
					<i class="orr">{{orr}}</i>
					<u class="err">{{err}}</u>
				</div>
				<div class="use">
					<span class="iconfont">&#xe605;</span>
					<input type="password" placeholder="再次确认密码" v-model='pass'/>
					<i class="orr">{{orr}}</i>
					<u class="err">{{err}}</u>
				</div>
				
				<div class="forget">点击注册，即表示您同意<span>《追味寻源注册服务协议》</span></div>
				<input type="submit" value="注册" @click='togo()'/>
			</div>
		</form>
	</div>
</template>

<script>
	import store from '@/vuex/store'
	export default {
		store,
		data(){
			return {
				user:'',
				view:'',
				pass:'',
				orr:"正确",
				err:'错误'
			}
		},
		methods:{
			togo(){
				window.location.href='#/login'
				this.$store.state.users=this.user
				this.$store.state.pass=this.pass
			},
			back(){
			window.history.back(-1)
		}
			
		},
		mounted(){
			this.$store.commit('footcover','none')
			
			
			var user1=document.getElementsByTagName('input')[0]
			var right1=document.getElementsByTagName('i')[0]
			var wrong1=document.getElementsByTagName('u')[0]
			var that=this;
			user1.onblur=function(){				
				if(/^[1][3,4,5,7,8][0-9]{9}$/.test(that.user)){
				  right1.style.display='block';
				  wrong1.style.display='none';
			   }else{
			   	  wrong1.style.display='block';
			   	  right1.style.display='none';
			   }
			};
			var user2=document.getElementsByTagName('input')[1]
			var right2=document.getElementsByTagName('i')[1]
			var wrong2=document.getElementsByTagName('u')[1]			
			user2.onblur=function(){				
				if(/^\d{6,}$/.test(that.view)){
				  right2.style.display='block';
				  wrong2.style.display='none'
			   }else{
			   	  wrong2.style.display='block'
			   	  right2.style.display='none';
			   }
			};
			var user3=document.getElementsByTagName('input')[2]
			var right3=document.getElementsByTagName('i')[2]
			var wrong3=document.getElementsByTagName('u')[2]			
			user3.onblur=function(){				
				if(that.pass=that.view){
				  right3.style.display='block';
				  wrong3.style.display='none'
			   }else{
			   	  wrong3.style.display='block'
			   	  right3.style.display='none';
			   }
			};
			
		}		
	}
</script>

<style scoped>
	.top{
		width: 100%;height: 150px;display: flex;justify-content: space-between;
		padding: 70px;box-sizing: border-box;font-size: 58px;font-weight: 600;
		padding-bottom: 20px;
	}
	.top img{
		width:65px ;margin-top: 20px;
	}
	.zhui{
		width: 100%;height: 312px;text-align: center;line-height: 312px;font-size: 130px;
	}
	.login-box{
		width: 100%;height: 800px;
	}
	.use{
		width: 900px;position: relative;
		margin: 50px auto;
	}
	.use input{
		width: 790px;border: none;border-bottom: 1px solid #aaa;
		outline: none;
	}
	.orr{
		position: absolute;top: 0;right: 10px;font-size:10px;
		color: forestgreen;display: none;
	}
	.err{
		position: absolute;top: 0;right: 10px;font-size:10px;
		color: salmon;display: none;text-decoration: none;
	}
	.iconfont{
		padding-left: 5px;
	}
	.forget{
		float: right;margin-right:80px ;margin-bottom:40px;
		font-size:10px;color: #d89b9c;
	}
	input[type=submit]{
		width: 900px;height: 135px;background: #ab2126;display: block;
		border: none;border-radius: 10px;margin: 0 auto;color: #fff;
	}
	
</style>
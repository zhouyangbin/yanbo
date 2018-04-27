<template>
    <div class="login">
        <el-row class="row-bg" >
        	<!--  FE-PC-TDC logo and title-->
  			<el-col :span="12" class="login-logo">
  				<img src="@assets/img/login_logo.png" alt="好文来文化评分">
  			</el-col>

  			<!-- login-form -->
  			<el-col :span="12" class="col-bg">

  				<el-row type="flex" justify="center" align="middle" class="row-bg">
  					<el-col :span="12">
  						<el-container class="login-form">
  							<el-header class="login-form-title">
  								<el-row type="flex" justify="center" align="middle" class="row-bg">
  									<el-col>
  										HR登录
  									</el-col>
  								</el-row>
  							</el-header>

  							<el-main class="login-form-main">
  								<el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm" label-width="100px" label-position="top" :inline-message="true">
  									<el-form-item label="Email" prop="email">
  										<el-input type="text" v-model="loginForm.email" placeholder="请输入邮箱" auto-complete="on" :autofocus="true"></el-input>
  									</el-form-item>

  									<el-form-item label="Password" prop="password">
  										<el-input type="password" v-model="loginForm.password" placeholder="请输入密码" auto-complete="off" :autofocus="true"></el-input>
  									</el-form-item>

  									<el-form-item>
  										<el-checkbox @change="rememberUser">记住用户名</el-checkbox>
  									</el-form-item>

  									<el-form-item>
  										<el-button type="primary" round @click="submitForm('loginForm')">登录</el-button>
  									</el-form-item>
  								</el-form>
  							</el-main>
  						</el-container>
  					</el-col>
  				</el-row>

  			</el-col>
		</el-row>
    </div>
</template>

<script>
	import { PATH_GRADE_REPORT } from '@/constants/URL'
    export default {
    	data () {
    		return {
    			loginForm: {},
    			loginRules: {
    				email: [
    				{ required: true, message: '邮箱不能为空', trigger: 'change' }
    				],
    				password: [
    				{ required: true, message: '密码不能为空', trigger: 'change' }
    				]
    			}
    		}
    	},
    	methods: {
    		rememberUser(){
    			console.log('rememberUser')
    		},
    		submitForm(formName) {
    			this.$refs[formName].validate((valid) => {
    				if (valid) {
    					this.$router.push({path:PATH_GRADE_REPORT})
    				} else {
    					console.log('error submit!!');
    					return false;
    				}
    			});
    		}
    	}
    }
</script>

<style scoped>
	.login{
		width: 100%;
		height: 100%;
		background-image: url(../../assets/img/login_bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.row-bg, .col-bg{
		height: 100%;
	}
	.login-logo{
		padding: 40px 35px;
	}
	.login-form{
		background-color: #fff;
		border-radius: 5px;
	}
	.login-form-title{
		background-color: #f9f9f9;
		border-radius: 5px;
		font-size: 16px;
		text-align: center;
	}
	.login-form-main{
		padding-left: 25px;
		padding-right: 25px;
	}
	.el-button{
		width: 100%;
	}
	
</style>

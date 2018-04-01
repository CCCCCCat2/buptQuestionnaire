<template>
  <div class="row">
      <div class="col-sm-12 col-md-6 q-px-md">
          <div class="text">
            <h3>你知我心</h3>
            <!-- <h4>最懂你的问卷</h4> -->
            <h5>用简单易用的交互和文本情绪分析技术,制作最懂你的问卷</h5>
          </div>          
      </div>
      <div class="col-sm-12 col-md-6 q-mt-lg q-px-md" v-show="showLogin">
            <q-card inline style="width:100%">
                <q-card-title>登录</q-card-title>
                <q-card-main>
                    <q-input v-model="username" float-label="请输入用户名" type="text"/>
                    <q-input v-model="password" float-label="请输入密码" type="password"/>                      
                <q-card-separator />
                <q-card-actions>
                    <span v-on:click="ToRegister" style="text-align:center">没有账号？马上注册</span>
                    <q-btn color="primary" label="登录" v-on:click="submitLogin" style="width:50%;margin:2% 25%"/>                                                       
                </q-card-actions>  
                 </q-card-main>
            </q-card> 
      </div>

      <div class="col-sm-12 col-md-6 q-mt-lg q-px-md" v-show="showRegister">
            <q-card inline style="width:100%">
                <q-card-title>注册</q-card-title>
                <q-card-main>
                    <q-input v-model="newUsername" float-label="请输入新用户名" type="text"/>
                    <q-input v-model="newPassword" float-label="请输入新密码" type="password"/>
                <q-card-separator />
                <q-card-actions>
                    <span v-on:click="ToLogin" style="text-align:center">已有账号？马上登录</span>
                    <!-- <q-btn flat color="primary" label="Sign in" v-on:click="submitLogin"/> -->
                    <q-btn color="primary" label="注册" v-on:click="registerNewAccount" style="width:50%;margin:2% 25%"/>
                </q-card-actions>  
                 </q-card-main>
            </q-card> 
      </div>

      
      
           
  </div>
</template>

<style scoped>
.text {
  margin-left: 5%;
  font-family: Roboto;
}
</style>

<script>
import { setCookies,getCookies } from "../../assets/js/cookie.js";

export default {
  data() {
    return {
      showLogin:true,
      showRegister:false,
      showPrompt:false,
      prompt:'',
      username:'',
      password:'',
      newUsername:'',
      newPassword:''
    }
  },
  methods: {
    submitLogin() {
      if (this.username == ""||this.password == "") {
        alert("请输入用户名或密码");
      }else{
        let data = {'username':this.username,'password':this.password};
        // this.axios.post(url).then(res=>(){})
        if (this.username =="buptQuestionnaire" && this.password == "123456") {
          this.prompt = "登录成功";
          this.showPrompt = true;
          setCookies('username',this.username,1000*60);
          setTimeout(function(){
            this.$router.push('/');
          }.bind(this),1000)    
          //maybe wrong router
        }else{
          alert('用户名或密码输入错误');
        }
      }
    },
    registerNewAccount() {
        alert("注册成功");
        this.ToLogin();
    },
    ToRegister(){
      this.showRegister = true
      this.showLogin = false
    },
    ToLogin(){
        this.showRegister = false
        this.showLogin = true
    }
  },
  mounted(){
    if (getCookies('username')) {
      this.$router.push("/")
    }
  }

};
</script>


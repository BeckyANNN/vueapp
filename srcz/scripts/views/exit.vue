<template>
   <section class="login">
        <div class="login-title">
            <h1>米阅读</h1>
            <h3>MiReader</h3>
        </div>  
        <div class="login-inp">
            <input type="text" placeholder="请输入手机号" v-model="phone">
            <input type="password" placeholder="请输入密码" v-model="pwd">
            <router-link :to="{name:'forget'}" class="forget">忘记密码？</router-link>
            <a class="sub" @click="login">登录</a>
            <!-- <router-link :to="n?{name:'home'}:{name:'exit'}" class="sub" v-model="pwd" @click.native="submit">登录</router-link> -->
            <router-link :to="{name:'register'}" class="reg">注册</router-link>
        </div>
   </section>
</template>

<script>
import {mapState,mapActions } from "vuex";
import axios from "axios";
export default {
    data(){
        return{
            phone:"",
            pwd:"",
            list:[],
            n:false
        }
    },
   
    methods:{
       
        login(){
            axios.post("/findUser",{
                phone:this.phone
            }).then(res=>{
                this.list = res.data;
                if(this.pwd==this.list.pwd){
                    localStorage.setItem("name",this.phone);
                    window.location.href = "/#/index/home"
                }else{
                    alert("用户名或密码错误");
                    window.location.href = "/#/index/exit"
                    
                }
            });
        }
    },
    mounted(){
        localStorage.removeItem("name");
    }
  
}
</script>

<style scopde>
    
</style>

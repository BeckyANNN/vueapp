<template>
  <section class="register">
        <div class="register-title">
            <h1>米阅读</h1>
            <h3>MiReader</h3>
        </div>  
        <div class="register-inp">
            <label for="phone">
                <input type="text" placeholder="请输入手机号" @blur="onBlurTxt" v-model="phone" id="phone">
                <span v-show="!flag">格式错误</span>
            </label>
            <!-- <transition :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave"></transition>  -->
            <label for="pwd">
                <input type="password" placeholder="请输入密码" v-model="pwd" @blur="onBlurPwd" id="pwd">
                <span v-show="!flag1">格式错误</span>
            </label>
            <label for="rpwd">
                <input type="password" placeholder="确认密码" v-model="rpwd" @blur="onBlurRpwd" id="rpwd">
                <span v-show="!flag2">两次密码不一致</span>
            </label>
            <router-link :to="{name:'login'}" class="reg" @click.native="register">注册</router-link>
            <router-link :to="{name:'home'}" class="sub">登录</router-link>
        </div>
   </section>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            regTxt:/^1[34578]\d{9}$/,
            regPwd:/^(\w){6,20}$/,
            phone:"",
            pwd:"",
            rpwd:"",
            flag:true,
            flag1:true,
            flag2:true,
            flag3:true
        }
    },
    methods:{
        onBlurTxt(){
            if(this.regTxt.test(this.phone)){
                this.flag = true;
                this.flag3 = true;
            }else{
                 this.flag = false;
                 this.flag3 = false;
            }
        },
        onBlurPwd(){
            if(this.regPwd.test(this.pwd)){
                this.flag1 = true;
                this.flag3 = true;
            }else{
                this.flag1 = false;
                this.flag3 = false;
            }
        },
       onBlurRpwd(){
           if(this.pwd==this.rpwd){
               this.flag2 = true;
               this.flag3 = true;
           }else{
               this.flag2 = false;
               this.flag3 = false;
           }
       },
       register(){
           if(this.flag3){
               axios.post("/register",{
                    phone:this.phone,
                    pwd:this.pwd
                }).then(res=>{
                    console.log("success");
                })
           }else{
               alert("请完善信息");
           }
       }
    },
    mounted(){
       
    }
}
</script>


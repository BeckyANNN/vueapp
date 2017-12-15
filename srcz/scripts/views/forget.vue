<template>
  <section class="forget">
        <div class="forget-title">
            <h1>米阅读</h1>
            <h3>MiReader</h3>
        </div>  
        <div class="forget-inp">
           <label for="phone">
                <input type="text" placeholder="请输入手机号" id="phone" v-model="phone">
                <span v-show="!flag">格式错误</span>
            </label>
            <label for="comfirm">
                <input type="text" placeholder="请输入验证码" id="comfirm" v-model="confirm" @blur="onBlurTxt">
                <span class="confirm">获取验证码</span>
            </label>
            <label for="pwd">
                <input type="password" placeholder="请输入新密码" v-model="pwd" @blur="onBlurPwd" id="pwd" :disabled="n">
                <span v-show="!flag1">格式错误</span>
            </label>
            <label for="rpwd">
                <input type="password" placeholder="确认新密码" v-model="rpwd" @blur="onBlurRpwd" id="rpwd" :disabled="n">
                <span v-show="!flag2">两次密码不一致</span>
            </label>
            <router-link :to="flag3?{name:'login'}:{name:'forget'}" class="sub" @click.native="update">提交</router-link>
            
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
            confirm:"",
            flag:true,
            flag1:true,
            flag2:true,
            flag3:false,
            n:true,
            list:[]
        }
    },
    methods:{ 
        onBlurTxt(){
            if(this.confirm==""){
                this.n = true;
            }else{
                this.n = false;
            }
        },  
        onBlurPwd(){
            if(this.regPwd.test(this.pwd)){
                this.flag1 = true;
                this.flag3 = true;
            }else{
                console.log(44);
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
       update(){
           if(this.flag3){
               axios.post("/update",{
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


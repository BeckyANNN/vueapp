<template>
   <section class="section">
       <div class="my">
           <section class="my-head">
               <div class="icon">
                   <span></span>
                   <span></span>
               </div>
               <div class="info">
                   <dl>
                       <dt><img src="../../assets/images/phone.png" alt=""></dt>
                       <dd>
                           <p>{{phone}}</p>
                           <p>这个人很懒，还没有设置签名...</p>
                       </dd>
                   </dl>
               </div>
           </section>
           <section class="my-nav">
               <div class="list">
                    <dl>
                        <dt><img src="../../assets/images/cart.png" alt=""></dt>
                        <dd>购物车</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../assets/images/quan.png" alt=""></dt>
                        <dd>卡券<span>1</span></dd>
                    </dl>
                    <dl>
                        <dt><img src="../../assets/images/money.png" alt=""></dt>
                        <dd>书币<span>182</span></dd>
                    </dl>
                    <dl>
                        <dt><img src="../../assets/images/gift.png" alt=""></dt>
                        <dd>奖品<span>0</span></dd>
                    </dl>
               </div>
                <a href="javascript:void(0);" @click="show=!show">去充值 ></a>
                <!-- <mt-button @click.native="handleClick">去充值 ></mt-button> -->
                
           </section>
           <section class="my-task">
              <h3>福利任务</h3> 
                 <div class="miss">
                    <dl>
                        <dt><img src="../../assets/images/sign.png" alt=""></dt>
                        <dd>
                            <p>每日签到</p>
                            <p>每天签到都有奖,连续7天抽大奖!</p>
                        </dd>
                    </dl>
                    <button @click="sign" class="btn">签到</button>
                     
               </div>
               <div class="miss">
                    <dl>
                        <dt><img src="../../assets/images/book.png" alt=""></dt>
                        <dd>
                            <p>百读不厌 <span>送20书币</span></p>
                            <p>每天阅读书城的书超过60分钟</p>
                        </dd>
                    </dl>
                    <p class="op">0%<span></span></p>
                   
               </div>
           </section>
           <section class="my-detail">
               <div class="main">
                   <div class="bottom">
                       <dl>
                           <dt><img src="../../assets/images/buy.png" alt=""></dt>
                           <dd>已购和上传</dd>
                       </dl>
                       <p>12</p>
                   </div>
                   <div class="bottom">
                       <dl>
                           <dt><img src="../../assets/images/yueli.png" alt=""></dt>
                           <dd>阅历</dd>
                       </dl>
                       <p>42</p>
                   </div>
                   <div class="bottom">
                       <dl>
                           <dt><img src="../../assets/images/note.png" alt=""></dt>
                           <dd>笔记</dd>
                       </dl>
                   </div>
                  
               </div>
           </section>
           <transition name="fade">
               <section class="my-msg" v-show="show">
               <div class="alertMsg">
                   <h3>请选择充值金额</h3>
                   <div class="del">
                       <dl>
                           <dt>1元</dt>
                           <dd>100书币</dd>
                       </dl>
                       <dl>
                           <dt>5元</dt>
                           <dd>500书币</dd>
                       </dl>
                       <dl>
                           <dt>10元</dt>
                           <dd>1,000书币</dd>
                       </dl>
                       <dl>
                           <dt>20元</dt>
                           <dd>2,000书币</dd>
                       </dl>
                       <dl>
                           <dt>5元</dt>
                           <dd>5,000书币</dd>
                       </dl>
                       <dl>
                           <dt>100元</dt>
                           <dd>10,000书币</dd>
                       </dl>
                   </div>
                   <p>支付方式：<span>微信支付</span><span>></span></p>
                   <button @click="cancel">取消</button>
               </div>
           </section>
           </transition>   
       </div>

       <!--  <mt-swipe :auto="4000" v-if="1">
            <mt-swipe-item class="slide">1</mt-swipe-item>
            <mt-swipe-item class="slide">2</mt-swipe-item>
            <mt-swipe-item class="slide">3</mt-swipe-item>
        </mt-swipe> -->

        
   </section>
</template>

<script>
import axios from "axios";

import {mapState,mapActions} from "vuex";

import { toast } from 'mint-ui';

import "../utils/swiper-3.3.1.min.js";

export default {
   data(){
       return{
           phone:localStorage.getItem("name"),
           show:false,
           asign:""
       }
   },
    computed:{
        ...mapState([
            "word",
        ])
    },
    methods:{
        	recharge(){
                if(this.phone){
                    this.show = true;
                }else{
                    window.location.href = "http://localhost:7000/#/index/exit";
                }
            },
            cancel(){
                this.show = false;
            },
            sign(){
                console.log(2222);
                var date = new Date();
                date.setTime(date.getTime()+24*60*60*1000);
                document.cookie = "asign=true;expire="+date.toGMTString();
                var btn = document.querySelector(".btn");
                btn.innerHTML = "已签到";
                btn.style.color = "#999999";
                btn.disabled = true;

            }
            
    },
    mounted(){
        this.asign=document.cookie.split(";")[0].split("=")[1];
        if(this.asign){
            var btn = document.querySelector(".btn");
            btn.innerHTML = "已签到";
            btn.style.color = "#999999";
            btn.disabled = true;
        }
    }
    
}
</script>

<style>
  
</style>

<template>
       <div class="home">
            <div class="home-top">
                <div class="navtitle">
                    <nav @click="change(i)" v-for="(n,i) in nav" :key="i" :class="navIndex==i?'nav-active':''">{{n}}</nav> 
                </div>
                
                <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="swiper" class="box">
                        <swiper-slide class="slide" v-for="(m,i) in img" :key="i">
                        <img :src="m.src" alt="" @click="gotoIndex(i)"> 
                    
                        </swiper-slide>
                </swiper> 
            </div>
            <div class="home-div">
                <div class="common hot" v-show="show">
                    <div class="home-nav">
                        <div @click="changeIndex(i)" class="nav" v-for="(n,i ) in navList" :key="i" :class="swiperIndex==i?'active':''">{{n}}</div>
                    </div>

                    <div class="home-swiper">
                        
                        <div class="swiper-container mt-1" id="swipe">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide mt-2 slide1" >
                                        <ul class="list">
                                            <li v-for="(item,i) in list" :key="i">
                                                <router-link :to="{name:'booksDetail',params:{id:item.sid},query:{name:item.title}}">
                                                    <img :src="item.cover" alt="">
                                                    <p>{{item.title}}</p>
                                                </router-link>
                                            </li>
                                        </ul>
                                        <!-- </mt-loadmore> -->
                                </div>
                                <div class="swiper-slide mt-2 slide1">
                                        <ul class="list">
                                            <li v-for="(item,i) in novelList" :key="i">
                                                <router-link :to="{name:'novelDel',query:{name:item.title}}">
                                                    <img :src="item.cover" alt="">
                                                    <p>{{item.title}}</p>
                                                </router-link>
                                            </li>
                                        </ul>
                                </div>
                                <div class="swiper-slide mt-2 slide1">
                                        <ul class="list">
                                            <li v-for="(item,i) in list" :key="i">
                                                <router-link :to="{name:'booksDetail',params:{id:item.fiction_id},query:{name:item.title}}">
                                                    <img :src="item.cover" alt="">
                                                    <p>{{item.title}}</p>
                                                </router-link>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
       </div>
</template>

<script>
import p1 from "../../assets/images/timg.jpg"
import p2 from "../../assets/images/timg2.jpg"
import p3 from "../../assets/images/timg3.jpg"
import p4 from "../../assets/images/timg4.jpg"
import router from "./router"

import "../utils/swiper-3.3.1.min.js";
import { Indicator } from 'mint-ui';
import axios from "axios";
import {mapState,mapActions} from "vuex";
export default {
    data(){
        return {
            mySwiper:"",
            list:[],
            novelList:[],
            img:[
                {src:p1},
                {src:p2},
                {src:p3},
                {src:p4}
            ],
            show:true,
            swiperIndex:0,
            swiperOption:{
                autoplay:2000,
                loop:true,
                direction:"horizontal",
                pagination: '.swiper-pagination',
                swiperIndex:0,
            }
            
        }
    },
    beforeUpdate () {
    },
    methods:{
        ...mapActions({
            changeNavIdx:"changeNavIdx"
        }),
        change(idx){
            this.show = (idx==0)?true:false;
            this.changeNavIdx(idx); //store.dispatch.changeNavIdx
        },
        changeIndex(idx){
            this.swiperIndex = idx;
            this.mySwiper.slideTo(idx);

        },
        handleChange(index){
            this.swiperIndex = index;
        },
        loadMore(){
            // ajax.....
            this.loading = true;
        },
        gotoIndex(id){
            if(id==3){
                router.push("/index/home");
            }
        }
    },
    computed:{  
        ...mapState([
            "navIndex",
            "nav",
            "navList",
            "activeIndex",
            "loading",
            "notNextTick",
            
        ]),
         swiper:{
            get(){
                console.log(this.$refs.swipe.slideTo)
                return this.$refs.swiper.swiper
            }
        }
    },
    mounted(){
        var that = this;

        this.$nextTick(()=>{
            this.mySwiper = new Swiper("#swipe",{
                loop:false,
                autoplay: false,
                direction:"horizontal",
                pagination: '.swiper-pagination',
                resistanceRatio:0,
                onSlideChangeEnd(swiper){
                    that.swiperIndex = swiper.activeIndex;
                },
                onInit(){
                    axios.get("/books")
                        .then(res=>{
                            that.list= res.data;
                        
                        });
                    axios.get("/novel")
                        .then(res=>{
                            that.novelList= res.data;
                        
                        })
                }
                

            });

            

        });
    },
  
 
}
</script>

<style>

</style>

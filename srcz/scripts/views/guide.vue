<template>
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="swiper" class="box">
        <swiper-slide class="slide" v-for="(m,i) in guideImg" :key="i">
            <img :src="m.src" alt="" @click="gotoIndex(i)">
        </swiper-slide>
    </swiper>
</template>

<script>
// import {swiper ,swiperSlide } from "vue-awesome-swiper"    //  {swiper:swiper,swiperSlide:swiperSLide,wrapper:wrapper}
import p1 from "../../assets/images/slide1.png"
import p2 from "../../assets/images/slide2.png"
import p3 from "../../assets/images/slide3.png"
import p4 from "../../assets/images/slide4.png"
import router from "./router"
export default {
    data(){
        return {
            guideImg:[
                {src:p1},
                {src:p2},
                {src:p3},
                {src:p4}
            ],
            notNextTick:true,   // $nextTick  swiper初始化加载  true  直接实例化  $nextTick 
            // otNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            swiperOption:{
                loop:false,
                autoplay: false,
                direction:"horizontal",
                pagination: '.swiper-pagination',
                onSlideChangeStart(){

                }
            }
        }
    },
    computed:{
        swiper:{
            get(){
                console.log(this.$refs.swipe.slideTo)
                return this.$refs.swiper.swiper
            }
        }
    },
    components:{
      
    },
    methods:{
        gotoIndex(id){
            if(id==3){
                router.push("/index/home");
            }
        }
    },
    beforeRouteEnter(to,from,next){
        console.log(to);
        if(localStorage.visitCount){
            localStorage.visitCount++;
            router.push("/index/home");
        }else{
            localStorage.visitCount=1;
            next()
        }
    }
}
</script>

<style scoped>
    .box,.slide,img{
        width:100%;
        height: 100%;
        /* background: darkmagenta; */
    }
</style>

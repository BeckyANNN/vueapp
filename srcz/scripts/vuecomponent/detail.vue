<template>
    <div>
        <h1>电影详情</h1>
        <h1>《{{$route.params.name}}》</h1>
        <h1>《{{$route.params.year}}》</h1>
        <img :src="src" alt="" @touchstart="goto">
        <button @click="goback">返回</button>
    </div>
</template>

<script>
import router from "./router.js";
export default {
    data(){
        return{
            src:""
        }
    },
    mounted(){
        this.src = this.$route.query.img;
    },
    methods:{
        goback(){
            router.go(-1);
        },
        goto(){
            router.push("/app");
        }
    }
}
</script>

<style>

</style>

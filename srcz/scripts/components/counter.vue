<template>
    <div class="find">

        <section class="find-search">
            <i class="iconfont icon-query"></i>
            <input type="text" placeholder="搜索作者、书名">
            <i class="iconfont icon-cf-c57"></i>
        </section>
        <section class="find-content">
            <div class="box">
                 <dl v-for="(item,i) in list" :key="i">
                    <dt><div><img :src="item.cover" alt=""></div></dt>
                    <dd>{{item.title}}</dd>
                </dl>

            </div>
        </section>
       
    </div>
</template>

<script>
import  bus from "./bus";
import store from "../vuex/store";
import {mapActions,mapState} from "vuex"
export default {
    data(){
        return {
            list:[]
        }
    },
    computed:{

    },
    mounted(){
         this.$http.get("http://39.106.19.127:3000/findAll").then(res=>{
                this.list= res.data;
            })
    },
    methods:{
      
        ...mapActions({
            desc:"descByNum",    // method  desc store.dispatch("descByNum");
        }),
    },

   
}


</script>

<style>

</style>

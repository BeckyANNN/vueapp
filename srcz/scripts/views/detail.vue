<template>
    <div class="detail">
      <mt-header :title="title" class="head">
            <div @click="goback" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
        <div class="info">
            <img :src="books.cover" alt="">
            <div class="cont">
                <h2>作者:&nbsp;{{books.authors}}</h2>
                <h3>来源:&nbsp;{{books.rights}}</h3>
                <h3>总字数:&nbsp;{{books.word_count}}</h3>
                <h3>价格:&nbsp;{{books.price}}</h3>
            </div>  
        </div>
        <p>{{books.summary}}</p>
        <div class="foot">
            <button @click="addto" :class="'add'">+ 书架</button>
            <button>开始阅读</button>
            <button>下载</button>
        </div>
    </div>
</template>

<script>
import router from "./router.js";
import axios from "axios";
export default {
    
    data(){
        return {
          books:"",
          arr:[],
          info:"",
          other:""
        }
    },
    computed:{
        title(){
            return this.$route.query.name;
        }
        
    },
    methods:{
        goback(){
            router.go(-1);
        },
        addto(){
           var name = this.$route.query.name;
           console.log(name);
           console.log(this.books.cover)
           var add = document.querySelector(".add");
           console.log(add);
            axios.get("http://39.106.19.127:3000/insert",{
                params:{
                    name,
                    cover:this.books.cover
                    }
                });
                add.innerHTML = "已加入";
                add.style.color = "grey";
           
        }
        
        
    },
    mounted(){
        var name = this.$route.query.name;
        //判断是否加入书架
        var add = document.querySelector(".add");
        this.$http.get("http://39.106.19.127:3000/findAll").then(res=>{
            this.other =res.data;
        }).then(res=>{
            for(var i in this.other){
                if(name==this.other[i].title){
                    add.innerHTML = "已加入";
                    add.style.color = "grey";
                }
            }
        })

        this.$http.get("http://39.106.19.127:3000/detail",{
            params:{
                name
            }
        }).then(res=>{
            this.books =res.data;
        })
          
        
    }
}   
</script>

<style scoped>
    
</style>

<template>
    <div>
        <h1 @click="change">我是 首页 </h1>
        <v-head></v-head>
        <h1 @click="send">{{m}}</h1>
        <v-foot num="1000" ref="ft" :name="m"></v-foot>
    </div>
</template>

<script>
import Head from "./head.vue";
import Foot from "./foot.vue";

export default {
    data(){
        return {
            m:"hello foot"
        }
    },
    methods:{
        change(){
            this.m = "加油 成都1706"
        },
        send(){
            console.log(this.refs);
            this.$refs.ft.change();
        },
        a(){
            alert(111111)
        }
    },
   components:{
       "v-head":Head,
       "v-foot":Foot
   }
}
</script>


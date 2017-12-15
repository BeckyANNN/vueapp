

import Vue from "vue";

import router from "./router";

// Vue.component("v-hello",Hello);

var vm = new Vue({
    el:"#app",
    data:{
        msg:"hello vue  so easy"
    },
    router    // 路由挂载到根实例
})


import Vue from "vue";
import VueRouter from "vue-router";


import Hello from "./hello.vue";
import Layout from "./layout.vue"
import App from "./app.vue";
import Find from "./find.vue"
import Mine from "./mine.vue"
import Detail from "./detail.vue"
import Forget from "./forget.vue"
// 0 . 
Vue.use(VueRouter);


// 1. 
const routes = [
    {
        path:"/",
        component:Layout,
        name:"layout",
        children:[
            {path:"app",component:App,name:"app"},
            {path:"find",component:Find,name:"find"},
            {path:"mine",component:Mine,name:"mine"},  
            {path:"*",redirect:"/app"}          
        ]
    },
    {
        path:"/moiveDetail/:year/:name",
        name:"detail",
        component:Detail
    },
    {
        path:"/forget",
        name:"forget",
        component:Forget
    },
    {
        path:"*",
        redirect:"/app"
    }
]

// 2.
const router = new VueRouter({
    mode:"hash",
    routes
});


export default router;
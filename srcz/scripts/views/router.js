
import Vue from "vue"

import VueRouter from "vue-router"
Vue.use(VueRouter)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 单文件组件
import Guide from "./guide.vue"
import Layout from "./layout.vue"
import Home from "./home.vue"
import Find from "./find.vue"
import My from "./my.vue"
import Exit from "./exit.vue"
import Detail from "./detail.vue"
import Forget from "./forget.vue"
import Register from "./register.vue"
import novelDel from "./novelDel.vue"
var routes = [
    {
        path:"/",
        component:Guide,
    },
    {
        path:"/index",
        component:Layout,
        children:[
            {path:"home",name:"home",component:Home},
            {path:"find",name:"find",component:Find},
            {path:"my",name:"my",component:My},
            {path:"exit",name:"exit",component:Exit},
            {path:"*",redirect:"/index/home"}
        ]
    },
    {
        path:"/booksDetail",
        name:"booksDetail",
        component:Detail
    },
    {
        path:"/forget",
        name:"forget",
        component:Forget
    },
    {
        path:"register",
        name:"register",
        component:Register
    },
    {
        path:"exit",
        name:"login",
        component:Exit
    },
    {
        path:"novelDel",
        name:"novelDel",
        component:novelDel
    }
    
]

const router = new VueRouter({
    mode:"hash",
    routes
});


export default router;

// store 最大容器
// 接收  state  ,注入到 store   所有数据从store获取  store.state.
// 接收   action 
// 接收   mutations
// 接收 getters


import state from "./state";
import actions from "./actions";
import mutations from "./mutations"

import Vue from "vue";
import Vuex from "vuex";



Vue.use(Vuex);  //全局使用 Vuex

const store = new Vuex.Store({
    state,
    
    mutations,
    actions,
});

export default store;
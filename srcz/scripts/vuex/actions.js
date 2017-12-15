
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
// action 是专门被 组件调用  mapActions 接收 action  action commit提交actiontype 发送mutation 修改state


import axios from "axios";
axios.defaults.baseURL ="http://39.106.19.127:3000"
export default {
    change({commit}){     //context ==  {commit:commit}  
        commit("CHANGE")                 // context.commit     commit
        console.log("002 action commit")
    },
    mycountAdd({commit}){
        console.log("002 action commit");
        commit("MYCOUNTADD");
    },
    descByNum({commit}){
        commit("DESCBYNUM");
    },
    changeAddress({commit},preload){
        //  preload 负荷  参数  只能穿一个  {a,b,c,d}
        console.log(preload)
        commit("changeAddress",preload)
    },
    addByInp({commit},n){
        commit("addByInp",n);
    },
    changeNavIdx({commit},id){
        commit("changeNavIdx",id);
    },
    changeword({commit},url){
        // ajax 
        // axios 
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                console.log(json);
                commit("changeword",json);
            })
    },
    getBanner({commit},url){
        axios.get(url)
            .then(res=>{
                return res.data;
            })
            .then(json=>{
                commit("getBanner",json)
            })
    },
    changetxt({commit}){
        commit("CHANGETXT")
    }
}

// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)

//  接收store 发送过来的 action  commit 

//  mutation 只能定义同步 

export default {
    CHANGE(state){   // vuex 注入state  changeMyCount 就是 actionType
        console.log("003  mutations 接收 type  change state");
        console.log(state);
        state.myCount +=100;
    },
    MYCOUNTADD(state){
        console.log("003  mutations 接收 type  change state");
        state.myCount +=200;        
    },
    DESCBYNUM(state){
        state.myCount-=300;
    },
    changeAddress(state,preload){
        state.address = preload;
    },
    addByInp(state,preload){
        state.myCount += preload;
    },
    changeNavIdx(state,id){
        state.navIndex = id;
    },
    changeword(state,data){
        state.word = data;
    },
    getBanner(state,data){
        state.banner = data;
    },
    CHANGETXT(state){
        state.txt="你好"
    }

}
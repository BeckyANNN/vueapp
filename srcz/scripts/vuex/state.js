
//  state 唯一数据源   存储组件的数据 
//  获取state  store.state.count 

//  mapState 
// store.state.key
// this.$store.state.key
export default {
    footList:[
        {name:"home",txt:"书城",icon:"&#xe752;",path:"./index/home"},
        {name:"find",txt:"书架",icon:"&#xe647;",path:"./index/find"},
        {name:"my",txt:"我的",icon:"&#xe667;",path:"./index/my"},
        {name:"exit",txt:"退出",icon:"&#xe6b9;",path:"./index/exit"},
    ],
    
    //首页
    nav:["图书","小说","漫画"],
    navList:["榜单","专题","推荐"],
    
    navIndex:0,
    
    activeIndex:0,
    loading:false,
    notNextTick:true,
    
}


1. vue  
是一套构建用户界面的渐进式框架 
web 前端框架
Vue 采用自底向上增量开发的设计  
Vue 单页面应用   single page application  spa 

MVC   angular
MVVM  vue 
MVP   


MVC   angular
M   model 数据层
V   view  视图层
C   controller   逻辑层

MVVM    vue 
M   model  数据层
V   view   视图层
VM   viewmodel   vm实例对象   把数据data和视图html绑定在一起 

MVP 
M  model    数据
V  view     视图 
p  presenter  逻辑





设计模式  
单例模式
工厂模式

代理模式
发布订阅模式 
观察者模式



2.前后端分离

node+express+ejs       


前端  前端服务器  展示页面 
后端  生成接口  访问数据库  返回数据   前端接收





3.  vue  webpack  配置 


    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",

ES6 代码转  es5 风格
babel-loader 模块打包加载器   打包js

"babel-plugin-import": "^1.6.2",
"babel-preset-es2015": "^6.24.1",
"babel-preset-stage-0": "^6.24.1",

import  插件  
预设  es6 环境  





4.  
mint-ui
element-ui



5. vuex  

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化


管理状态   data 数据  

view    模板    单文件组件  

model   数据  

viewmode  实例    

vuex  状态管理机制  

state，驱动应用的数据源；   (data 所有的组件的数据存储在state)
view，以声明方式将 state 映射到视图； 

actions，响应在 view 上的用户输入导致的状态变化。  (动作 )

vuex 单向数据流

actions

state 

mutation (管理)

store   (action,state,mutation)

view (用户操作views)  ---- (store.dispatch)  ----(action  commit )    
 ---  (mutations 管理 type )  --mutate (修改state)   ----   (render vueComponent)


 数据流方向

 views (function) 发出  action  store.dispatch
 action  匹配  action 类型   得到  preload  (参数)    store.commit (actionType)  给  mutations 
 mutations 得到 修改 preload  然后去change state (data)
 state  data 修改后会触发 二次  render 更新的页面  


 重点 
1.Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，
若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2.改变 store 中的状态的唯一途径就是显式地提交(commit) mutations

state 获取方式   
store.state.count
this.$store.state.count
mapState 




vuex 

state 
actions    
mutations  

1.定义 actions  和 state  和 mutations 
2.把写好 state  actions mutations  注入 store 
3.把store 注入 到  根实例  vm实例对象
4. vue组件 派发  dispatch (action )  ==>  action   匹配对应actionType  访问  mutations  render
5.  getters




var a= {name:"tom"};
var b = {age:18,grade:100};
 a = {...b};    //  ==>   {name:"tom",age:18,grade:100}
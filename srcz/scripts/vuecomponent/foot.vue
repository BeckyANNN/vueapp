<template>
    <div>
        <h1 @click="get">我是底部  foot</h1>
        <h1>{{num}}</h1>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
export default {
   props:{
       num:String,
       name:String
   },
   methods:{
       change(){
           this.num =  666666;
       },
       get(){
           this.$parent.a();
       }
   }
}
</script>

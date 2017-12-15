<template>
    <div class="hello">
        <h1 class="hello-color">hello vue 单文件组件 </h1>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"hello"
        }
    }
}
</script>

<style scoped lang="css">
    h1{
        color:green;
    }
</style>


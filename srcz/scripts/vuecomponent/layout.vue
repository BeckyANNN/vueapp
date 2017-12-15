<template>
    <div>
        <router-view class="view"></router-view>
        <router-link to="/app">首页</router-link>
        <router-link to="/find">发现</router-link>
        <router-link to="/mine">我</router-link>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
    .router-link-active{
        background: yellow;
        color:brown;
    }
    .view{
        border:3px solid #fff;
    }
</style>


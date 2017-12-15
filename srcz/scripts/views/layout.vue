<template>
   <section class="login">
       <div class="layout">
           <router-view></router-view>
           <v-foot></v-foot>
       </div>
   </section>
</template>

<script>
import Foot from "../components/foot.vue"
export default {
    components:{
        'v-foot':Foot
    }
}
</script>

<style>

</style>

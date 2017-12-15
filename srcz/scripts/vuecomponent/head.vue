<template>
    <div>
        <h1 @click="send">我是head head</h1>
    </div>
</template>

<script>
export default {
   methods:{
       send(){
           alert("head");
       }
   }
}
</script>

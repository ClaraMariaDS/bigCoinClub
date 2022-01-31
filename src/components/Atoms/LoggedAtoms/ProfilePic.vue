<template>
<div>
    <!-- cambiar la ruta de la img por un valor dinámico que venga de la API -->
    <img src="../../Images/avatar.jpg" alt="" class="containerImg"> 
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    // picture: { type:String, required: true },
  },
 }
  
</script>
<style scoped>
    .containerImg{
        width: 142px;
        height: 144px;
    border-radius: 100px;
    }
</style>

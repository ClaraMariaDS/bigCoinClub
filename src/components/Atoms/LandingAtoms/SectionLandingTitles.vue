<template>
<div>
    <div class="circle"></div>
    <h1 class="sectionTitle"> {{sectionTitle}} </h1>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    sectionTitle: { type: String, required: true },
    variant: {
      type: String
    },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500&family=Ubuntu:wght@700&display=swap');
    .sectionTitle{
      font-family: 'ubuntu';
      color:var(--secondary-color);
      text-shadow: 0px 0px 15px rgba(255,255,255,0.74);
      font-size: 32px;
      margin: -47px 0px 0px 15px;
    }
    .circle{
     width: 61px;
     height:61px;
     border-radius: 100px;
     background:var(--azul-principal);
    }
</style>

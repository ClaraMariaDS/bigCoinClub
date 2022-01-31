<template>
<div>
    <h1 class="sectionTitle"> {{sectionTitle}} </h1>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    sectionTitle: { type: String, required: true },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
    .sectionTitle{
      font-family: 'ubuntu';
      background: -webkit-linear-gradient(rgba(40, 80, 199, 1) 60%, rgba(40, 80, 199, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
      text-shadow: 0px 4px 21px rgba(255,255,255,0.5);
      font-size: 40px;
     
    }
</style>

<template>
<div>
    <h1 class="sectionSubtitle"> {{sectionSubtitle}} </h1>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    sectionSubtitle: { type: String, required: true },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
    .sectionSubtitle{
        font-family: 'ubuntu';
        text-transform: uppercase;
        font-weight: 700;
        font-size: 15px;
        color:var( --azul-principal);
    }
</style>

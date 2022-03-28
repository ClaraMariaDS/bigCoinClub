<template>
<div>
    <h1 class="welcomeTitle"> {{welcomeTitle}} </h1>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    welcomeTitle: { type: String, required: true },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
  .welcomeTitle{
    font-family: 'ubuntu';
    color:var(--secondary-color);
    text-shadow: 0px 4px 21px rgba(255,255,255,0.5);
    font-size: 50px;
    width: 320px;
  }
  @media (max-width: 480px) {
    .welcomeTitle{
      font-size: 24px;
      width: 100vw;
      text-align: center;
    }
  }
</style>

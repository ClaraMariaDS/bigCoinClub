<template>
<div class="containerProfileName">
    <p class="profileName"> {{profileName}} </p>
    <img src="../../Images/BtnEditar.png" alt="" class="editIcon">
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    profileName: { type: String, required: true },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap');
    .profileName{
        font-family: 'ubuntu';
        font-weight: 700;
        font-size: 15px;
        color:var( --secondary-color);
        text-shadow: 0px 0px 4px rgba(255, 255, 255, 0.75);
    }
    .editIcon{
        margin: 0px 0px 0px 7px;
    }
    .containerProfileName{
        display: flex;
        align-items: center;
    }
</style>

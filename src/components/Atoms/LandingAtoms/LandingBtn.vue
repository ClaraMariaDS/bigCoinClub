<template>
<div>
    <button class="btn" :class="{ btn__empieza: variant === 'empieza', btn__mas: variant === 'mas' , btn__previsualizar: variant=== 'previsualizar'}"> {{btnText}} </button>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    btnText: { type: String, required: true },
    variant: {
      type: String
    },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');
    .btn{
      border:0;
      border-radius: 5px;
      color: white;
      /* margin: 10px; */
    }
    .btn__empieza{
        background:var(--azul-principal);
        width: 235px;
        height: 63px;
        font-size: 22px;
        font-weight: 700;
        font-family: Inter;
        letter-spacing: 1px;
    }
     .btn__mas{
        background:var(--azul-principal);
        width: 152px;
        height:33px;
        font-size: 18px;

    }
     .btn__previsualizar{
        background:var(--azul-principal);
        width: 152px;
        height:33px;
        font-size: 18px;

    }
</style>


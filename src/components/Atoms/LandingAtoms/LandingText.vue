
<template>
<div>
    <p class="text" :class="{ text__XL: variant === 'XL', text__paragraph: variant === 'paragraph' }"> {{landingText}} </p>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    landingText: { type: String, required: true },
    variant: {
      type: String
    },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@300;500&display=swap');

  .text{
      font-family: 'inter';
      color:var(--secondary-color);;
  }
  .text__XL{
    font-size: 20px;
  }
  .text__paragraph{
    font-size: 15px;
    width: 220px;
    line-height: 18.15px;
    text-align: justify;
  }
@media (max-width: 480px) {
.text{
    font-size:13px;
}
}
</style>

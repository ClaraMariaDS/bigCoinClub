<template>
    <div>
        <p class="title" :class="{ title__white: variant === 'white', title__dark: variant === 'dark'}"> {{titleText}} </p>
    </div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    titleText: { type: String, required: true },
    variant: {
      type: String
    },
  },
 }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');
.title{
    font-size: 24px;
    font-family: ubuntu;
    font-weight: 700;
}
.title__white{
    color:var(--secondary-color);
     text-shadow: 0px 4px 9px rgba(255, 255, 255, 0.5);
}
.title__dark{
    color:var(--azul-principal);
    text-shadow: 0px 4px 21px rgba(255, 255, 255, 0.5);
}
</style>
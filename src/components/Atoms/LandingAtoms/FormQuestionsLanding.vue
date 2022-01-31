<template>
<div>
        <p class="questionForm" :class="{ question__white: variant === 'white', question__dark: variant === 'dark'}"> {{questionText}} </p>
        <router-link :to="direction" class="linkForm" :class="{ link__white: variant === 'white', link__dark: variant === 'dark'}">{{action}}</router-link> 
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    questionText: { type: String},
    direction:{ type: String},
    action:{ type: String, required: true },
    variant: {
      type: String
    },
  },
 }

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@300;500&display=swap');
    .questionForm{
        font-family: inter;
        font-weight: 500;
        font-size:16px;
        margin-bottom: 5px;
    }
    .linkForm{
        font-family: inter;
        font-weight: 500;
        font-size:16px;
    }
    .link__white{
        color:var(--secondary-color);
    }
    .link__dark{
        color:var( --azul-principal);
    }
    .question__white{
        color:var(--secondary-color);
    }
     .question__dark{
        color:var( --azul-principal);
    }
</style>

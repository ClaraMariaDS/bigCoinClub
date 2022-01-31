<template>
<div>
    <form class="landingForm">
        <label class="labelLanding" :class="{ label__white: variant === 'white', label__dark: variant === 'dark'}"> {{labelLanding}} </label>
        <input class="inputLanding" :class="{ input__white: variant === 'white', input__dark: variant === 'dark'}" :placeholder= "placeholderVariable" :type="typeVariable" > 
    </form>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    labelLanding: { type: String},
    placeholderVariable:{ type: String, required: true },
    typeVariable:{ type: String},
    forVariable:{ type: String},
    variant: {
      type: String
    },
  },
 }

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@300;500&display=swap');
    .inputLanding{
     width: 337px;
     height: 40px;
     border: 1px solid rgba(151, 151, 151, 1);
     font-family: inter;
     font-size: 15px;
     padding: 0px 10px;
     border-radius: 5px;
     font-weight:500;
    };
    .input__dark{
      box-shadow: -1px 4px 17px rgba(255, 255, 255, 0.25);
    }
    .input__white{
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .inputLanding::placeholder{
        font-weight:500;
        color:rgba(151, 151, 151, 1);
    }
    .inputLanding:focus{
      outline:none;
    }
    .labelLanding{
        
        font-family: inter;
        font-size:15px;
        font-weight: 500;
        margin: 7px 0px;
    }
    .label__white{
      color: var(--secondary-color);
    }
    .label__dark{
      color: var(--azul-principal);
    }
    .landingForm{
        display: flex;
        flex-direction:column;
    }
</style>

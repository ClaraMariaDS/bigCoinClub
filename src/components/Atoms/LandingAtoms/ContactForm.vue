<template>
<div>
    <form class="contactForm">
        <label class="labelContact" :class="{ label__white: variant === 'white', label__dark: variant === 'dark'}"> {{labelLanding}} </label>
        <input class="inputContact" :class="{ input__white: variant === 'white', input__dark: variant === 'dark'}" :placeholder= "placeholderVariable" :type="typeVariable" > 
        <label class="labelContact" :class="{ label__white: variant === 'white', label__dark: variant === 'dark'}"> {{labelLanding2}} </label>
        <textarea class="textareaContact" :placeholder= "placeholderText"/>
    </form>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    labelLanding: { type: String},
    labelLanding2: { type: String},
    placeholderVariable:{ type: String, required: true },
    typeVariable:{ type: String},
    placeholderText:{ type: String},
    forVariable:{ type: String},
    variant: {
      type: String
    },
  },
 }

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@300;500&family=Ubuntu:wght@400;700&display=swap');

    .inputContact{
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
    .inputContact::placeholder{
        font-weight:500;
        color:rgba(151, 151, 151, 1);
    }
    .inputContact:focus{
      outline:none;
    }
    .labelContact{
        font-family: inter;
        font-size:15px;
        font-weight: 500;
        margin: 7px 0px;
        
    }
    .textareaContact{
        width: 394px;
        height: 173px;
        border-radius: 5px;
    }
    .textareaContact::placeholder{
      font-family: Ubuntu;
      font-weight: 400;
    }
    .label__white{
      color: var(--secondary-color);
    }
    .label__dark{
      color: var(--azul-principal);
    }
    .contactForm{
        display: flex;
        flex-direction:column;
    }
</style>

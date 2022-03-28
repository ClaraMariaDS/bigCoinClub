<template>
<div class="selectOptions" id="SelectLanding">
        <label class="selectLabel">{{labelSelect}}</label>
        <slot name="texto"></slot>
        <slot name="imagen"></slot>
        <select :name="selectName" :id="selectId" v-model="optionSelected" @change="$emit('onSelected', optionSelected)" class="selectLanding">
          <option :value="option" v-for="option in options" :key="option" class="optionLanding">{{option}}</option>
        </select>
        
</div>  
</template>
<script>
import '../../style/style.css'

export default {
  name:'SelectLanding',

  props: {
    options: {type: Array},
    selectName: {type: String},
    selectId: {type: String},
    labelSelect: {type: String},
    // labelSelectVariant: {type: String, required: false}
  },

  data () {
    return {
      optionSelected: null
    }
  },
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');
.selectLabel{
    color:white;
    font-family: Ubuntu;
    margin-bottom: 5px;
    font-weight: 700;
}


.selectLanding{
    width: 330px;
    height: 53px;
    background: var(--secondary-color);
    border-radius: 5px;
    font-family: Ubuntu;
    font-weight:700;
    font-size: 15px;
    outline: none;
    padding: 0px 5px;
    background-image: url(../../Images/FlechaSelect.png);
    background-repeat: no-repeat;
    background-position: 95% center;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    padding: 0px 10px;
    
}
  select::-ms-expand {
  display: none; 
}
.optionLanding{
    font-family: Ubuntu;
    font-weight:700;
}
@media (max-width: 600px) {
.selectLanding{
    width: 70vw;
}

}
</style>
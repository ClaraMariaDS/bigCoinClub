<template>
<div class="formContainer" id="selectForm">
    <div class="selectContainer">
        <SelectLanding @onSelected="setPeriod" :options="periods" selectName="periods" selectId="periods" labelSelect="Plazo (meses)" class="select"></SelectLanding>
        <SelectLanding @onSelected="setAmount" :options="amounts" selectName="amounts" selectId="amounts" labelSelect="Monto"  class="select">
            <template v-slot:imagen> <img src="../../Images/iconoUSDT.png" alt="iconoUSDT"  class="usdtIcon"/> <p class="textoUSDT">USDT</p> </template>
            <template v-slot:texto><p class="extraLabel">0 USDT Máximo</p></template>
        </SelectLanding>
    </div>
    
    <button :disabled="validateDisableButton" @click="alertUser" class="btnDisabled">Previsualizar</button>
</div>    
</template>
<script>
import SelectLanding from "./SelectLanding.vue";

export default {
    name: 'SelectForm',

    components: { 
        SelectLanding 
    },

    data(){
        return{
            periods: ['3 meses', '6 meses', '9 meses'],
            amounts: ['1500', '2000', '2500', '5000'],
            periodSelected: null,
            amountSelected: null
        }
    },

    methods: {
        alertUser(){
            alert('Clicked!')
        },

        setPeriod(period){
            this.periodSelected = period
        },

        setAmount(amount){
            this.amountSelected = amount
        }
    },
    computed: {
        validateDisableButton(){
            return !((this.periodSelected != null) && (this.amountSelected != null))
        }
    },
} 

</script>
<style scoped>
.selectContainer{
    display:flex;
}
.formContainer{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}
.select{
    display: flex;
    flex-direction: column;
    margin: 20px 20px 0px 20px;
}
.selectContainer{
    display: flex;
    
}
.btnDisabled{
    margin: 20px;
    color: var(--secondary-color);
    width: 152px;
    height: 33px;
    border-radius: 5px;
    font-size: 18px;
    background: #134CF4;
    border: 0;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.5), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
}
.btnDisabled:disabled{
    background: #9898A0;
}
.usdtIcon{
  width: 14px;
  height: 13px;
   position: absolute;
margin: 42px 0px 0px 235px;
}
.textoUSDT{
 position: absolute;
margin: 38px 0px 0px 255px;
  color:var( --azul-principal);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.extraLabel{
    color: white;
    font-family: Ubuntu;
    font-weight: 700;
    position: absolute;
    margin: 0px 0px 0px 209px;
}
</style>
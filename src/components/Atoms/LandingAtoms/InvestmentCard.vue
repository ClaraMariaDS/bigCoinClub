<template>
    <div class="cardContainer">
        <img :src='investmentImg' :alt='text' class="imgContainer">
        <p class="investmentTitle">{{investmentTitle}}  <br/> {{'meses'}}</p>
    </div>
</template>
<script>
import '../../style/style.css'
    export default{
         props: {
            investmentTitle: { type: String, required: true },

    },
    data (){
        return{
            // armar array para hacer un v-for con las img
            investmentImg: require('../../Images/cardImg.png'),
            text:"imagen"
        }
    }
    }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');
.cardContainer{
    display: flex;
    align-items: center;
    justify-content: center;
}
.investmentTitle{
   display: flex;
   justify-content: center;
   position: absolute;
    color: var(--secondary-color);
    text-transform: uppercase;
    font-family: Ubuntu;
    font-weight: 700;
    font-size: 30px;
    flex-wrap: wrap;
   text-align: center;
}

</style>
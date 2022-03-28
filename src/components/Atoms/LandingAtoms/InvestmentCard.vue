<template>
    <div class="cardContainer">
        <p class="investmentTitle">{{investmentTitle}}  <br/> {{'meses'}}</p>
        <img :src='investmentImg' :alt='text' class="imgContainer">
        
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
    margin: 10px;
    width: 248px; 
}
.imgContainer{
    box-shadow: 7px 6px 7px 0px #00000073;
}
.investmentTitle{
    color: var(--secondary-color);
    text-transform: uppercase;
    font-family: Ubuntu;
    font-weight: 700;
    font-size: 30px;
    flex-wrap: wrap;
    text-align: center;
    z-index:1;
    position: relative;
    left: 176px;
}
@media (max-width: 480px){

}
</style>
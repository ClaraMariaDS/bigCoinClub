<template>
    <div class="cardContainer">
        <img :src='aboutImg' :alt='text' class="imgContainer">
     </div>    
        <p class="aboutDescription">{{aboutDescription}}</p>
   
</template>
<script>
import '../../style/style.css'
    export default{
         props: {
            aboutDescription: { type: String, required: true },

    },
    data (){
        return{
            // armar array para hacer un v-for con las img
            aboutImg: require('../../Images/aboutCard1.png'),
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
.imgContainer{
    filter: drop-shadow(12px 14px 13px rgba(0, 0, 0, 0.45));
}
.aboutDescription{
    font-family: Inter;
    font-weight: 400;
    font-size: 20px;
    width: 233px;
    color: var(--secondary-color);
    text-align: center;
}
</style>
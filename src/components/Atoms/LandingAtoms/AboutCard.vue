<template>
    <div class="cardContainer">
        <img :src='aboutImg' :alt='text' class="imgContainer" >
         
        <p class="aboutDescription">{{aboutDescription}}</p>
   </div>
</template>
<script>
import '../../style/style.css'
    export default{
         props: {
            aboutDescription: { type: String, required: true },
            aboutImg: {type: String},
    },
    data (){
        return{
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
    flex-direction: column;
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
    margin: 0;
}

</style>
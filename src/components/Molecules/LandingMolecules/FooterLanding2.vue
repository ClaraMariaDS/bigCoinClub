<template>
<div class="contFooter">
    <img src="../../Images/markBBC.png" alt="" class="icon">
    <hr class="line"/>
    <NavFooter2 class="navFooter"></NavFooter2>
     <hr class="line"/>
    <img src="../../Images/markBBC.png" alt="" class="icon">
</div>
</template>
<script>
import NavFooter2 from '../../Atoms/LandingAtoms/NavBar/NavFooter2.vue'
export default {
    components:{
        NavFooter2 
    }
}
</script>
<style scoped>
.contFooter{
    display: flex;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
}
.line{
    width: 15vw;
    opacity: 0.3;
}
@media (max-width: 480px){
    hr, .icon{
        display: none;
    }
    
}
</style>
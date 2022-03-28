<template>
<div class="contFooter">
    <img src="../../Images/markBBC.png" alt="" class="icon">
    <hr class="line"/>
    <NavBarFooterLanding ></NavBarFooterLanding>
    <hr class="line"/>
    <img src="../../Images/markBBC.png" alt="" class="icon">
</div>

</template>
<script>
import NavBarFooterLanding from "../../Atoms/LandingAtoms/NavBar/NavBarFooterLanding.vue";
export default{
    components:{
        NavBarFooterLanding
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
    .icon{
        display: none;
    }
    .line{
        width: 10vw;
    }
}
</style>

<template>
<div class="containerFooter">
    <FooterLanding2></FooterLanding2>
</div>
    
</template>
<script>
import FooterLanding2 from "../../Molecules/LandingMolecules/FooterLanding2.vue"
export default{
    components:{
    FooterLanding2
}
}
</script>
<style scoped>
.containerFooter{
    background: #0C0B0B;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media (max-width: 480px){
    .containerFooter{
        background: var(--secondary-color);
    }
}
</style>
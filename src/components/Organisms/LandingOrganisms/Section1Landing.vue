<template>
<div class="container">
     <div class="contSection1">
         <div class="imgContainer">
            <img src="../../Images/HomeImage.png" alt="" class="imgBackground">
        </div>
        <div class="content">
            <WelcomeTitleLanding welcomeTitle="Invierte con nosotros" class="title"></WelcomeTitleLanding>
            <LandingText landingText="Invierte inteligente y gánale a la economía con la más confiable plataforma de inversión." class="text"></LandingText>
            <LandingBtn variant="empieza" btnText="!Empieza ya!" :disabled="isDisabled" class="button"></LandingBtn> 
        </div>      
    </div>
    <FooterLanding class="footerLanding"></FooterLanding>
</div>
</template>
<script>
import WelcomeTitleLanding from '../../Atoms/LandingAtoms/WelcomeTitleLanding.vue'
import LandingBtn from '../../Atoms/LandingAtoms/LandingBtn.vue'
import LandingText from '../../Atoms/LandingAtoms/LandingText.vue'
import FooterLanding from '../../Molecules/LandingMolecules/FooterLanding.vue'
export default{
    components:{
        WelcomeTitleLanding, LandingBtn, LandingText,FooterLanding
    }
}

</script>
<style scoped>
.contSection1{
    height: 65vh;
    display: flex;
    justify-content: space-around;
    display: flex;
    flex-wrap:wrap ;
    flex-direction: row-reverse;
}
.text{
    width: 420px;
    margin: 20px 0px;
}
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;    
}
.button{
    margin: 30px 0px;
}
@media (max-width: 480px) {
    .imgBackground{
        width: 65vw;
        padding-top:70px;
    }
    .imgContainer{
        height: 55vw;
    }
    .content{
        align-items: center;
        height: 75vh;
    }
    .container{
         height: 93vh;
    }
    .text{
        text-align: center;
    }
    .title{
        margin-bottom:20px;
    }
    .button{
        height: 20vh;
        margin: 10px;
        display: flex;
        align-items: center;
    }
    .footerLanding{
        height: 50vh;
    }
}
</style>
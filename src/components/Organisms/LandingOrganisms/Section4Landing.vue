<template>
<div class="containerSection4">
    <div class="contenido">
        <div class="text">
           <SectionLandingTitles sectionTitle="Plazos de Inversión"></SectionLandingTitles> 
           <LandingText landingText="Lorem ipsum dolor lorem ipsum dolor" variant="XL" class="description"></LandingText>
        </div>
        <div class="contentCards">
            <InvestmentBox></InvestmentBox>
        </div>
        
    </div>
</div>
    <SectionLineRight sectionNumberR="03"></SectionLineRight>
</template>
<script>
import SectionLandingTitles from '../../Atoms/LandingAtoms/SectionLandingTitles.vue'
import InvestmentBox from '../../Molecules/LandingMolecules/InvestmentBox.vue'
import SectionLineRight from '../../Molecules/LandingMolecules/SectionLineRight.vue'
import LandingText from '../../Atoms/LandingAtoms/LandingText.vue'
export default{
    components:{
        SectionLandingTitles, InvestmentBox, SectionLineRight,LandingText
    }
}
</script>
<style scoped>
.containerSection4{
  display: flex;
    flex-direction: column;
    height: 65vh;
    justify-content: center;
}
.contenido{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.text{
    display: flex;
    justify-content: space-between;
    padding:  60px 10vw 0px 10vw;
    align-items: center;
}
.contentCards{
      display: flex;
    justify-content: center;
    padding: 80px 0px;
}
@media (max-width: 480px){
    .description{
        display: none;
    }
    .text{
        justify-content: center;
    }
   
}
</style>
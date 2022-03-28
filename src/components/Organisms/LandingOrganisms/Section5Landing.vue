<template>
<div class="containerSection4">
    <div class="contenido">
        <div class="text">
           <SectionLandingTitles sectionTitle="Sobre Nosotros"></SectionLandingTitles> 
           <LandingText landingText="Lorem ipsum dolor lorem ipsum dolor" variant="XL" class="description"></LandingText>
        </div>
        <div class="contentCards">
            <AboutCardsBox></AboutCardsBox>
        </div>
    </div>
</div>
    <SectionLineLeft sectionNumberL="04"></SectionLineLeft> 
</template>
<script>
import SectionLandingTitles from '../../Atoms/LandingAtoms/SectionLandingTitles.vue'
import SectionLineLeft from '../../Molecules/LandingMolecules/SectionLineLeft.vue'
import LandingText from '../../Atoms/LandingAtoms/LandingText.vue'
import AboutCardsBox from '../../Molecules/LandingMolecules/AboutCardsBox.vue'
export default{
    components:{
    SectionLandingTitles,
    SectionLineLeft,
    LandingText,
    AboutCardsBox
}
}
</script>
<style scoped>
.containerSection4{
  display: flex;
    flex-direction: column;
    height: 75vh;
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
    padding:  100px 10vw 0px 10vw;
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
    .containerSection4{
        height: 65vh;
    }
    .contentCards{
        padding: 80px 20px;
    }
}
</style>
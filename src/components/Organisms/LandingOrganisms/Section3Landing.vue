<template>
<div class="containerSection3">
    <div class="text">
        <SectionLandingTitles sectionTitle="Simulador de Inversión"></SectionLandingTitles>
        <LandingText landingText="Lorem ipsum dolor lorem ipsum dolor" variant="XL" class="description"></LandingText>
    </div>
    <div class="contentSelect">
       <SelectForm></SelectForm> 
    </div>
     
</div>
    <SectionLineLeft sectionNumberL="02"></SectionLineLeft> 
</template>
<script>
import SectionLandingTitles from '../../Atoms/LandingAtoms/SectionLandingTitles.vue'
import LandingText from '../../Atoms/LandingAtoms/LandingText.vue'
import SelectForm from '../../Molecules/LandingMolecules/SelectForm.vue'
import SectionLineLeft from '../../Molecules/LandingMolecules/SectionLineLeft.vue'
export default{
    components:{
        SectionLandingTitles, LandingText, SelectForm,SectionLineLeft
    }
}
</script>
<style scoped>
.text{
    display: flex;
    justify-content: space-between;
    padding:  0px 10vw;
    align-items: center;
}
.containerSection3{
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: center;
}
.contentSelect{
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
        margin-top: 60px;
    }
}
</style>
<template>
<div class="containerSection2">
    <div class="title">
        <SectionLandingTitles sectionTitle="Nuestras Monedas"></SectionLandingTitles>
        <div></div>
    </div>
        <div class="content">
          <CoinBox class="CoinBox"></CoinBox>  
          <img src="../../Images/Section2image.png" alt="" class="backgroundImg">
        </div>
</div>
    <SectionLineRight sectionNumberR="01"></SectionLineRight>
</template>
<script>
import SectionLandingTitles from '../../Atoms/LandingAtoms/SectionLandingTitles.vue'
import CoinBox from '../../Molecules/LandingMolecules/CoinBox.vue'
import SectionLineRight from '../../Molecules/LandingMolecules/SectionLineRight.vue'
export default{
    components:{
        SectionLandingTitles, CoinBox, SectionLineRight
    }
}
</script>
<style scoped>
.containerSection2{
    height: 60vh;
}
.content{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 30px;
}
.title{
    display: flex;
    justify-content: space-around;
    width: 55vw;
    padding-top: 50px;
}
.CoinBox{
    margin-top: 50px;
}
@media (max-width: 480px){
    .backgroundImg{
        display: none;
    }
    .title{
        width: 100vw;
        justify-content: center;
    }
}
</style>
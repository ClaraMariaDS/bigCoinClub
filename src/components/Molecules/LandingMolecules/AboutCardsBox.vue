<template>
    <div class="boxContainer">
        <AboutCard aboutDescription="Lorem ipsum dolor lorem ipsum dolor" :aboutImg="aboutCard2"></AboutCard>
        <AboutCard aboutDescription="Lorem ipsum dolor lorem ipsum dolor" :aboutImg="aboutCard3"></AboutCard>
        <AboutCard aboutDescription="Lorem ipsum dolor lorem ipsum dolor" :aboutImg="aboutCard1"></AboutCard>
    </div>
</template>
<script>
import AboutCard from "../../Atoms/LandingAtoms/AboutCard.vue";
import aboutCard1 from '../../Images/aboutCard1.png'
import aboutCard2 from '../../Images/aboutCard2.png'
import aboutCard3 from '../../Images/aboutCard3.png'
export default {
    
 components: { AboutCard } ,

 data() {
     return {
        aboutCard1:aboutCard1,
        aboutCard2:aboutCard2,
        aboutCard3:aboutCard3
     }
 },
    }
    
</script>

<style scoped>
.boxContainer{
    display: flex;
}
@media (max-width: 600px) {
.boxContainer{
    overflow: scroll;
    width: 100vw;
    }
}
</style>
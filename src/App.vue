<template>
<div>
  <div class="section1">
  <Header/>
  <Section1Landing/>
</div>
<div class="section2">
  <Section2Landing/>
  <Section3Landing/>
</div>
<div class="section3">
  <Section4Landing/>
</div>
<div class="section4">
  <Section5Landing/>
</div>
<SectionFooter/>
  <!-- <Prueba/>
  <Footer/> -->
   <router-view />
</div>

</template>

<script>
// import Prueba from './components/Prueba.vue'
// import Footer from './components/Footer.vue'
import Header from './components/Organisms/LandingOrganisms/Header.vue'
import Section1Landing from './components/Organisms/LandingOrganisms/Section1Landing.vue'
import Section2Landing from './components/Organisms/LandingOrganisms/Section2Landing.vue'
import Section3Landing from './components/Organisms/LandingOrganisms/Section3Landing.vue'
import Section4Landing from './components/Organisms/LandingOrganisms/Section4Landing.vue'
import Section5Landing from './components/Organisms/LandingOrganisms/Section5Landing.vue'
import SectionFooter from './components/Organisms/LandingOrganisms/SectionFooter.vue'
export default {
  name: 'App',
  components: {
    // Prueba,
    // Footer,
    Header,
    Section1Landing,
    Section2Landing,
    Section3Landing,
    Section4Landing,
    Section5Landing,
    SectionFooter
}
}
</script>

<style scoped>
.section1{
 background: radial-gradient(70.48% 113.47% at -13.27% 72.72%, #1461F6 0%, #011537 54.66%);
}
.section2{
 background: linear-gradient(0.27deg, #011537 58.48%, #1461F6 113.16%);
}
.section3{
background: linear-gradient(176.58deg, #011537 64.98%, #0D44AC 134.25%);
/* background: url("./components/Images/BackgroundSection4.png") no-repeat ;
  background-size: cover; */

}
.section4{
  background: linear-gradient(180deg, #062765 29.49%, #0C0B0B 100%);
  /* background: url("./components/Images/BackgroundSection3.png") no-repeat ;
  background-size: cover; */
}
</style>

<template>
<div>
    <div id="header" class="header"> 
    <h1>Header</h1>
     <router-view />
    <!-- <LocaleSwitcher></LocaleSwitcher> -->
    <p> {{$t('main.welcome')}}  </p>
    <!-- <NavBarLanding ></NavBarLanding> -->
    <NavBarLanding></NavBarLanding>
    <LogoLanding></LogoLanding>
    <!-- <SearchBarLanding></SearchBarLanding> -->
   <NavLogin></NavLogin>
    <WelcomeTitleLanding welcomeTitle="Invierte con nosotros"></WelcomeTitleLanding>
    <FormLanding placeholderVariable="Correo Electrónico" labelLanding="Correo" variant="dark"></FormLanding>
    <FormLanding placeholderVariable="lsnaskhsa" labelLanding="Email" variant="white"></FormLanding>
    <FormLanding placeholderVariable="Contraseña" typeVariable="password" forVariable="input" labelLanding="Clave" variant="white"></FormLanding>
    <FormQuestionsLanding questionText="¿Aun no eres usuario de BigCoinClub?" action="Regístrate aquí" direction="/empresas" variant="white"></FormQuestionsLanding>
    <FormQuestionsLanding questionText="¿Ya eres usuario de BigCoinClub?" action="Inicia sesión aquí" direction="/empresas" variant="dark"></FormQuestionsLanding>
    <SelectForm></SelectForm>
    <LandingBtn variant="empieza" btnText="!Empieza ya!" :disabled="isDisabled"></LandingBtn>
    <LandingBtn variant="mas" btnText="Más"></LandingBtn>
    <SectionLandingTitles sectionTitle="Nuestras Monedas"></SectionLandingTitles>
    <SectionLandingTitles sectionTitle="Simulador de Inversión"></SectionLandingTitles>
    <LandingText landingText="Lorem ipsum dolor lorem ipsum dolor hdohasoduhansd enlaodbakdbalsdoei  alndoba dsalsdb asljdba dsoa" variant="paragraph"></LandingText>
    <LandingText landingText="Lorem ipsum dolor lorem ipsum dolor" variant="XL"></LandingText>
    <FormTitleLanding titleText="Inicio de sesión-Personas" variant="white"></FormTitleLanding>
    <FormTitleLanding titleText="Inicio de sesión-Empresas" variant="dark"></FormTitleLanding>
    <NavBarFooterLanding ></NavBarFooterLanding>
    <ProfilePic></ProfilePic>
    <ProfileName profileName="Sofia Gomez"></ProfileName>
    <ContactForm labelLanding2="Consulta" labelLanding="Correo" variant="white" placeholderText="0/1000 palabras" placeholderVariable="correo@email.com"></ContactForm>
    <InvestmentCard investmentTitle="Tres" ></InvestmentCard>
    <AboutCard aboutDescription="Lorem ipsum dolor lorem ipsum dolor"></AboutCard>
 </div>
 <div class="whiteHeader">
        <SectionTitles sectionTitle="Invertir"></SectionTitles>
        <SectionTitles sectionTitle="Simulador"></SectionTitles>
        <SectionSubtitles sectionSubtitle="Fondos de billetera interna"></SectionSubtitles>
        
        
    </div>
</div>


</template>

<script>
import LandingBtn from "../components/Atoms/LandingAtoms/LandingBtn.vue";
import SectionLandingTitles from "./Atoms/LandingAtoms/SectionLandingTitles.vue";
import LandingText from "./Atoms/LandingAtoms/LandingText.vue";
import FormLanding from "./Atoms/LandingAtoms/FormLanding.vue";
// import NavBarLanding from "./Atoms/LandingAtoms/NavBar/NavBarLanding.vue";
import NavBarFooterLanding from "./Atoms/LandingAtoms/NavBar/NavBarFooterLanding.vue";
import WelcomeTitleLanding from "./Atoms/LandingAtoms/WelcomeTitleLanding.vue";
// import SearchBarLanding from "./Atoms/LandingAtoms/SearchBarLanding.vue";
import LogoLanding from "./Atoms/LandingAtoms/LogoLanding.vue";
import FormTitleLanding from "./Atoms/LandingAtoms/FormTitleLanding.vue";
import FormQuestionsLanding from "./Atoms/LandingAtoms/FormQuestionsLanding.vue";
import SectionTitles from "./Atoms/LoggedAtoms/SectionTitles.vue";
import SectionSubtitles from "./Atoms/LoggedAtoms/SectionSubtitles.vue";
import ProfilePic from "./Atoms/LoggedAtoms/ProfilePic.vue";
import ProfileName from "./Atoms/LoggedAtoms/ProfileName.vue";
import SelectForm from "./Atoms/LandingAtoms/SelectForm.vue";
import ContactForm from "./Atoms/LandingAtoms/ContactForm.vue";
import InvestmentCard from "./Atoms/LandingAtoms/InvestmentCard.vue";
import AboutCard from "./Atoms/LandingAtoms/AboutCard.vue";
// import DropdownBtnLanding from "./Atoms/LandingAtoms/DropdownBtnLanding.vue";
import NavBarLanding from "./Molecules/LandingMolecules/NavBarLanding.vue";
import NavLogin from "./Molecules/LandingMolecules/NavLogin.vue";

// import LocaleSwitcher from "./Atoms/LocaleSwitcher.vue"



export default {
    el:"#header",
    
   
 components: { LandingBtn, SectionLandingTitles, LandingText, FormLanding, NavBarFooterLanding, WelcomeTitleLanding,  LogoLanding, FormTitleLanding, FormQuestionsLanding, SectionTitles, SectionSubtitles, ProfilePic, ProfileName, SelectForm, ContactForm, InvestmentCard, AboutCard, NavBarLanding, NavLogin } 
    }
</script>


<style scoped>
.header{
    background:#011436;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    }
.whiteHeader{
    background: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>

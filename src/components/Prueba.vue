<template>
<div>
    <div id="header" class="header"> 

     <router-view />
    
    <p> {{$t('main.welcome')}}  </p>

    <FormLanding placeholderVariable="Correo Electrónico" labelLanding="Correo" variant="dark"></FormLanding>
    <FormLanding placeholderVariable="lsnaskhsa" labelLanding="Email" variant="white"></FormLanding>
    <FormLanding placeholderVariable="Contraseña" typeVariable="password" forVariable="input" labelLanding="Clave" variant="white"></FormLanding>
    <FormQuestionsLanding questionText="¿Aun no eres usuario de BigCoinClub?" action="Regístrate aquí" direction="/empresas" variant="white"></FormQuestionsLanding>
    <FormQuestionsLanding questionText="¿Ya eres usuario de BigCoinClub?" action="Inicia sesión aquí" direction="/empresas" variant="dark"></FormQuestionsLanding>

    <LandingBtn variant="mas" btnText="Más"></LandingBtn>

    <FormTitleLanding titleText="Inicio de sesión-Personas" variant="white"></FormTitleLanding>
    <FormTitleLanding titleText="Inicio de sesión-Empresas" variant="dark"></FormTitleLanding>

    <ProfilePic></ProfilePic>
    <ProfileName profileName="Sofia Gomez"></ProfileName>
    <ContactForm labelLanding2="Consulta" labelLanding="Correo" variant="white" placeholderText="0/1000 palabras" placeholderVariable="correo@email.com"></ContactForm>

 </div>
 <div class="whiteHeader">
        <SectionTitles sectionTitle="Invertir"></SectionTitles>
        <SectionTitles sectionTitle="Simulador"></SectionTitles>
        <SectionSubtitles sectionSubtitle="Fondos de billetera interna"></SectionSubtitles>
        
        
    </div>
</div>


</template>

<script>

import FormLanding from "./Atoms/LandingAtoms/FormLanding.vue";

import FormTitleLanding from "./Atoms/LandingAtoms/FormTitleLanding.vue";
import FormQuestionsLanding from "./Atoms/LandingAtoms/FormQuestionsLanding.vue";
import SectionTitles from "./Atoms/LoggedAtoms/SectionTitles.vue";
import SectionSubtitles from "./Atoms/LoggedAtoms/SectionSubtitles.vue";
import ProfilePic from "./Atoms/LoggedAtoms/ProfilePic.vue";
import ProfileName from "./Atoms/LoggedAtoms/ProfileName.vue";
import ContactForm from "./Atoms/LandingAtoms/ContactForm.vue";



export default {
    el:"#header",
    
   
 components: {    FormLanding,  FormTitleLanding, FormQuestionsLanding, SectionTitles, SectionSubtitles, ProfilePic, ProfileName, ContactForm } 
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

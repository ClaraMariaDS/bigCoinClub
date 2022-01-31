<template>
<div class="navLogin">
      <DropdownBtnLanding btnText="Iniciar Sesion" btnItem1="pagina1" btnItem2="pagina2" variant="login" class="btnLogin"></DropdownBtnLanding>
    <DropdownBtnLanding btnText="Registrarse" btnItem1="pagina1" btnItem2="pagina2" variant="signin" class="btnLogin"></DropdownBtnLanding>
</div>
   
</template>
<script>
import DropdownBtnLanding from "../../Atoms/LandingAtoms/DropdownBtnLanding.vue";
export default {
    el:"#header",
    
   
 components: { DropdownBtnLanding } 
    }
</script>
<style scoped>
.navLogin{
    display: flex;
  
}

</style>
<template>
<div class="navLogin">
      <DropdownBtnLanding btnText="Iniciar Sesion" btnItem1="pagina1" btnItem2="pagina2" variant="login" class="btnLogin"></DropdownBtnLanding>
    <DropdownBtnLanding btnText="Registrarse" btnItem1="pagina1" btnItem2="pagina2" variant="signin" class="btnLogin"></DropdownBtnLanding>
    <LocaleSwitcher class="btnLanguaje"></LocaleSwitcher> 
</div>
</template>
<script>
import DropdownBtnLanding from "../../Atoms/LandingAtoms/DropdownBtnLanding.vue";
import LocaleSwitcher from "../../Atoms/LandingAtoms/LocaleSwitcher.vue";
export default {
    el:"#header",
    
   
 components: { DropdownBtnLanding, LocaleSwitcher} 
    }
</script>
<style scoped>
.navLogin{
    display: flex;
    justify-content: space-between;
}
.btnLogin, .btnLanguaje{
    padding: 10px;
}
</style>
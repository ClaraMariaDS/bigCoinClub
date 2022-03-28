<template>
<div class="header">
    <LogoLanding class="logo"></LogoLanding>
    <NavBarLanding class="navbar"></NavBarLanding>
    <NavLogin class="login"></NavLogin>
</div>
    
</template>
<script>
import LogoLanding from "../../Atoms/LandingAtoms/LogoLanding.vue"
import NavBarLanding from "../../Molecules/LandingMolecules/NavBarLanding.vue"
import NavLogin from "../../Molecules/LandingMolecules/NavLogin.vue"
export default {
    components:{
      LogoLanding,
      NavBarLanding,
      NavLogin
    },
    
}
</script>
<style scoped>
.header{
    display: flex;
    padding: 30px;
    align-items: center;
}
.navbar{
    padding-left: 70px;
}
.login{
    padding-right: 20px;
}
@media (max-width: 600px) {
  .login{
      display: none;
      
}
.logo{
        display: none;
    }
.header{
    background: linear-gradient(180deg, #04258C 0%, rgba(20, 77, 246, 0.69) 48.75%, #001D75 100%);
    height: 30px;
    padding: 20px 0px 10px 0px;
}
.navbar{
    padding-left: 0px;
}
}

</style>
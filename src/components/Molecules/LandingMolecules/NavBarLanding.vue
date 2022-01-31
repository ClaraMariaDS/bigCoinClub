<template>
  <header :class="{'scrolled-nav': scrollPosition}">
      <nav>
          <ul v-show="!mobile" class="navigation">
            <li><router-link to="/empresas" class="link">Empresas</router-link> </li>    

            <li><router-link to="/personas" class="link">Personas</router-link> </li>    

            <li><router-link to="/nosotros" class="link">Sobre Nosotros</router-link> </li>   
                
            <li><router-link to="/contacto" class="link">Contáctanos</router-link> </li>    
          </ul>
          <div class="icon" @click="toggleMobileNav" v-show="mobile">
              <img src="../../Images/menuIcon.png" alt=""  class="i" :class=" {'icon-active': mobileNav} ">
          </div>
          <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link to="/empresas" class="link">Empresas</router-link> </li>    

            <li><router-link to="/personas" class="link">Personas</router-link> </li>    

            <li><router-link to="/nosotros" class="link">Sobre Nosotros</router-link> </li>   
                
            <li><router-link to="/contacto" class="link">Contáctanos</router-link> </li>    
          </ul>
          </transition>
      </nav>
  </header>
</template>
<script>
export default{
    name: "NavPrueba",
    data(){
        return{
            scrollPosition:null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created(){
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods:{
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        checkScreen(){
            this.windowWidth = window.innerWidth;
            if(this.windowWidth <= 750) {
                this.mobile=true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
        
    }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');

    header{
        /* agregar background */
        z-index: 99;
        width: 100%;
        /* position: fixed; */
        transition: 0.5s ease all;
        color: var(--secondary-color);
    }
 
    nav{
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: 0.5s ease all;
        width: 98%;
        margin: 0 auto;
        @media(min-width: 1140px){
            max-width: 1140px;
        }
      }   
    ul, .link{
        color: var(--secondary-color);
        font-family: Inter;
        text-decoration: none;
        list-style: none;
        margin: 0px 25px;
        font-size: 15px;
        font-weight: 400;
        }
        li{
            margin: 20px 0px;
        }
    .branding{
        display: flex;
        align-items: center;
    }
    .navigation{
        display: flex;
        align-items: center;
        flex:1;
        justify-content: flex-start;
    }
    .icon{
        display: flex;
        position:absolute;
        align-items: center;
        top: 0px; 
        left: 24px;
        height: 100%;
    }
    .i{
        cursor: pointer;
        transition: 0.8s ease all;
    }
    .icon-active{
        transform: rotate(180deg);
    }
    .dropdown-nav{
        display: flex;
        flex-direction: column;
        position:fixed;
        width: 100%;
        max-width: 250px;
        height:100%;
        /* background: ; */
        top: 15%;
        left: 0;
    }
    .mobile-nav-enter-active,
    .mobile-nav-leave-active{
        transition:1s ease all ;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to{
        transform: translateX(-250px);
    }
    .mobile-nav-enter-to{
        transform: translateX(0);
    }
</style>

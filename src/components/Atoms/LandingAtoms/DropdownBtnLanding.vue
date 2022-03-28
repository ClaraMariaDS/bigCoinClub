<template>

    <ul class="menu">
   
    <li @mouseover="listOne = true" @mouseleave="listOne = false" class="btnMenu" :class="{ btn__signIn: variant === 'signin',  btn__logIn: variant === 'login', transparent: variant === 'transparent'}">
  
      <a href="#" class="dropdown" :class="{transparent: variant === 'transparent'}">{{btnText}} <img src="../../Images/iconoDropdown.png"> </a>

      <transition name="fade">
        
        <ul v-if="listOne" @click="listOne = false">
          
          <li class="dropdownItem" :class="{transparent: variant === 'transparent'}"><a href="#" class="dropdownItem"> {{btnItem1}} </a></li>
          <li class="dropdownItem" :class="{transparent: variant === 'transparent'}"><a href="#" class="dropdownItem"> {{btnItem2}} </a></li>

        </ul>
      
       </transition>
    
    </li>
    
  </ul>
  
</template>
<script>
    import '../../style/style.css'
    export default {
        props: {
            btnText: { type: String, required: true },
            btnItem1: { type: String, required: true },
            btnItem2: { type: String },
            variant: {
            type: String
            },
        },
    data () {
        return{
            listOne:   false,
        }
   
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');
.menu {  
  font-family: Inter;
  font-weight: 500;
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1em;
}

.dropdownItem{
  display: block;
  color: var(--azul-principal);
  text-decoration: none;
}
.dropdownItem:hover{
  font-size: 17px;
}
.transparent{
  background: transparent;
}
.dropdown{
    display: flex;
    color: var(--secondary-color);
    text-decoration: none;
    align-items: center;
    justify-content: space-around;
    width: 152px;
}
.btn__signIn{
    background: #5F84F7;
}
.btn__logIn{
    background: var(--azul-principal);
}
.dropdownItem,  .btnMenu{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #fff;
  width: 152px;
  height: 35px;
  border-radius: 5px;
  
}
.btnMenu{
   margin: 0px 10px;
}
.dropdownItem{
    background: var(--azul-principal);
}
.menu li ul {
  position: absolute;
  left: 0;
  top: 41px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: var(--secondary-color);
  transition: background .2s;
  margin: 5px 0px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
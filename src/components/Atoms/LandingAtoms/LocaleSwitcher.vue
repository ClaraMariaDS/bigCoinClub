<template>
<div  @mouseover="listOne = true" @mouseleave="listOne = false">
    <div class="contBtn">
    <p class="es">ES</p>
    <hr class="line">
    <img src="../../Images/TranslateIcon.png" alt="">
    <img src="../../Images/dropdownIncon.png" alt="" class="iconDropdown">
    </div>
    <ul v-if="listOne" @click="listOne = false" >
        <li v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
            {{locale}}
        </li>
    </ul>
 </div>   
</template>

<script>
export default{
    name:'LocaleSwitcher',
    methods:{
        switchLocale(locale) {
            if(this.$i18n.locale !== locale){
                this.$i18n.locale = locale;
            }
        }
    },
    data() {
        console.log(process.env.VUE_APP_I18N_SUPPORTED_LOCALE)
        return{
            locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
             listOne:   false,
            
        }
    }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');
li{
    color: #454B66;
    cursor: pointer;
    margin: -10px 0px 0px 0px;
    display: block;
    padding: 15px 10px;
    font-family: Inter;
    font-weight: 500;
    font-size: 15px;
    width: 80px;
    text-align: center;
}
ul{
    list-style: none;
    background: white;
    border-radius: 5px;
    margin: 0px;
    position: absolute;
}
.contBtn{
    background: var(--secondary-color);
    display: flex;
    align-items: center;
    color: #144DF6;
    width: 100px;
    height: 35px;
    justify-content: center;
    border-radius: 5px;
}
.line{
    width: 2px;
    height: 24px;
    margin: 0px 10px;
    background: #144DF6;
    color: #144DF6;
    border: none;
    opacity: 1;
}
.es{
    font-family: Inter;
    font-weight: 500;
}
.iconDropdown{
    margin: 0px 0px 0px 10px;
}
@media (max-width: 600px){
    .contBtn{
        background: transparent;
    }
}
</style>

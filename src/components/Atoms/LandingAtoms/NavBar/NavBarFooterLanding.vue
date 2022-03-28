<template>

 <div id="nav">

    <router-link to="/plazos-inversion" class="link">Plazos de Inversión</router-link> 

    <router-link to="/nosotros" class="link">Sobre Nosotros</router-link> 

    <router-link to="/simulador-inversion" class="link">Simulador de Inversión</router-link> 

 </div>

 <router-view />

</template>

<script>

export default {


 components: {},

};

</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=Ubuntu:wght@700&display=swap');
    .link{
        color: var(--secondary-color);
        font-family: Inter;
        text-decoration: none;
        margin: 0px 25px;
        font-size: 14px;
        font-weight: 300;
        text-shadow: 0px 4px 8px #FFFFFF ;
    }
    @media (max-width: 480px){
        .link{
            font-size: 10px;
            margin: 0px 15px;
        }
    }
</style>
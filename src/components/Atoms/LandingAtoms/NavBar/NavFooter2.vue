<template>

 <div id="nav" class="nav">

    <router-link to="/plazos-inversion" class="link">Términos y condiciones</router-link> 

    <router-link to="/nosotros" class="link">(FAQ)</router-link> 

    <router-link to="/simulador-inversion" class="link">Bigcoin@bbc.com</router-link> 

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
        margin: 0px 50px;
        font-size: 17px;
        font-weight: 700;
    }
@media (max-width: 480px){
    .link{
        color: #134CF4;
        font-weight: 300;
        text-decoration: underline;
        display: flex;
        flex-direction: column;
        padding: 5px 0px;
        align-items: flex-start;
    }
    .nav{
        width: 100vw;
    }
}
</style>
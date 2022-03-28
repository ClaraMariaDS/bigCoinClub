<template>
<div class="boxContainer">
    <InvestmentCard investmentTitle="Tres" class="card"></InvestmentCard>
    <InvestmentCard investmentTitle="Seis" class="card"></InvestmentCard>
    <InvestmentCard investmentTitle="Nueve" class="card"></InvestmentCard>
    <InvestmentCard investmentTitle="Doce" class="card"></InvestmentCard>
</div>
    

</template>
<script>
import '../../style/style.css'
import InvestmentCard from '../../Atoms/LandingAtoms/InvestmentCard.vue'
    export default{
        components:{
            InvestmentCard
        }
        
   
    }
</script>
<style scoped>
.boxContainer{
    display: flex;
    justify-content: space-around;
    width: 55vw;
    
}
@media (max-width: 600px){
    .boxContainer{
    width: 100vw;
    overflow: auto;
    margin-left: 50px;
}
}


</style>
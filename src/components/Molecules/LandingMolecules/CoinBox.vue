<template>
<div class="contBox">
     <img src="../../Images/USDTLogo.png" alt="" />
     <hr/>
     <div class="contBtnText">
        <LandingText landingText="Lorem ipsum dolor lorem ipsum dolor hdohasoduhansd enlaodbakdbalsdoei  alndoba dsalsdb asljdba dsoa" variant="paragraph" class="landingText"></LandingText>
        <LandingBtn variant="mas" btnText="Más" class="button"></LandingBtn>
     </div>  
</div>
</template>
<script>
import LandingText from "../../Atoms/LandingAtoms/LandingText.vue"
import LandingBtn from "../../Atoms/LandingAtoms/LandingBtn.vue"
export default {
    
 components: { LandingText, LandingBtn } 
    }
</script>

<style scoped>
.contBox{
    display: flex;
    align-items: center;
    background: url(../../Images/usdtBackground.svg);
    background-repeat:no-repeat ;
    /* padding: 20px; */
    width: 500px;
    height: 300px;
    justify-content: center;
    box-shadow: 7px 6px 16px 0px #00000073;

}
hr{
    height: 200px;
    margin: 0px 20px;
}
.contBtnText{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.landingText{
    margin: 0px 0px 30px 0px;
}
@media (max-width: 600px) {
    .contBox{
        flex-direction: column;
        width: 80vw;
    }
    hr{
        height: 0px;
        width: 200px;
        margin: 10px 0px;
    }
    .landingText{
        margin: 0;
    }
    .button{
        margin: 15px 0px;
    }
}
</style>
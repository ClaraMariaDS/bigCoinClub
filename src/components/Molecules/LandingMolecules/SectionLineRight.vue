<template>
    <div class="lineCont">
        <hr class="line"/>
        <p class="sectionNumber"> {{sectionNumberR}} </p>
    </div>
</template>
<script>
    export default{
        props:{
            sectionNumberR: { type: String},
        }
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Nunito:wght@300;500&family=Ubuntu:wght@400;700&display=swap');
.lineCont{
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 97vw;
}
.line{
    width: 90vw;
    height: 0px;
    margin: 0;
    opacity: 0.5;
    
}
.sectionNumber{
    color: white;
    font-size:50px;
    margin: 0px 0px -10px 0px;
    font-family: Ubuntu;
    color: var(--secondary-color);
    opacity: 0.1;
    font-weight: 700;
}
@media (max-width: 480px){
    .line{
    width: 80vw;
}
}
</style>
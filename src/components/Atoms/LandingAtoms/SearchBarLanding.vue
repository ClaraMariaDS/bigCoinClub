<template>
<div class="searchContainer">
    <input type="text" value="" class="searchBar" placeholder="Search">
    <img src="../../../components/Images/searchIcon.png" alt="" class="imgSearch"/>
</div>
</template>
<script>
import '../../style/style.css'
export default {
  props: {
    sectionTitle: { type: String, required: true },
    variant: {
      type: String
    },
  },
 }
  
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;500&family=Ubuntu:wght@700&display=swap');
   .searchContainer{
       background: white;
       height: 35px;
       display: flex;
       align-items: center;
       padding: 0px 10px;
       border-radius: 5px;
       font-size: 14px;
       font-weight: 500;
   }
   .searchBar{
       border:0;
   }
   .searchBar:focus{
      outline:none;
   }
</style>

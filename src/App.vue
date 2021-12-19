<template>
  <div class="contenedor">
    <NavBar />
    <router-view class="main"/>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default ({
  components: {
    NavBar,
  }
})
</script>


<style>

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "quicksand", sans-serif;
  }

  .contenedor{
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    height: 1087px;
  }
  .main{
    padding: 20px;
    background: #E5E5E5;
  }

  @media screen and (max-width: 750px){
    .contenedor{
    display: grid;
		grid-template-columns: 1fr 2fr;
  }
  }
  
</style>

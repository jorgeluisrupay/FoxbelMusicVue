<template>
  <div class="nav">
      <div class="navegador">

        <router-link to="/" class="nav-link active" > <img src="../assets/foxbel-music.png" alt="foxbel"> </router-link>
        <h3>Mi Libreria</h3>
        <router-link to="/" class="nav-link" >Reciente</router-link>
        <router-link to="/artistas" class="nav-link"  >Artistas</router-link>
        <router-link to="/albums" class="nav-link"  >Albums</router-link>
        <router-link to="/canciones" class="nav-link"  >Canciones</router-link>
        <router-link to="/estaciones" class="nav-link"  >Estaciones</router-link>
        <br>

        <h3>Playlisst</h3>
        <router-link to="/metal" class="nav-link"  >Metal</router-link>
        <router-link to="/parabailar" class="nav-link"  >Para Bailar</router-link>
        <router-link to="/rock90" class="nav-link"  >Rock 90s</router-link>
        <router-link to="/baladas" class="nav-link"  >Baladas</router-link>


      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav{
    padding-top: 30px ;
    background: #662323;
    height: 100%;
    overflow: hidden;
}
h3{
    color: #FFFFFF;
    padding-left: 40px ;
    font-size: 22px;
    font-weight: 700;
    line-height: 27.5px;
    
}
.nav-link{
    color: #FFFFFF;
    padding-left: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    
}
.nav-link:focus,
.nav-link:active,
.nav-link:hover{
    color: #E86060;    
}
.navegador img{
    width: 250px;
    height: 59px;
    margin-bottom: 20px;
    
}
@media screen and (max-width: 1075px){

    .navegador img{
    padding-left: 0px ;
    width: 180px;
    
}
}
@media screen and (max-width: 880px){

    .navegador img{
    padding-left: 0px ;
    width: 150px;
    padding-right: 20px
    
}
}
@media screen and (max-width: 750px){

    h3{
    padding-left: 20px ;
    }
   .nav-link{
    padding-left: 20px;
    }
    .navegador img{
    padding-left: 0px ;
    width: 150px;
    
}
}

@media screen and (max-width: 500px){

    h3{
    padding-left: 10px ;
    }
   .nav-link{
    padding-left: 10px;
    }
    .navegador img{
    padding-left: 0px ;
    width: 130px;
    
}
}

</style>
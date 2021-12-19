<template>
  <div class="card w-100">
  <img  loader="lazy"
        :src="data.picture_big" 
        class="card-img-top" :alt="data.name" >
  <div class="card-body">
    <h5 class="card-title"> Nombre: <span> {{data.name}} </span> </h5>
    <h5 class="card-title"> # Albums: <span>{{data.nb_album}}</span> </h5>
    <h5 class="card-title"> # Fan: <span>{{data.nb_fan}}</span> </h5>
    
  </div>
  </div>
</template>

<script>
export default {
    props: {
        data: Object,
    }
}
</script>

<style>

h5{
    font-weight: bold;
    color: #662323;
    font-size: 15px;
}
span{
    color: #E86060
}

</style>
<template>
  <div class="container">
        <h1 class="text-center"> Estaciones </h1>
        <hr>
        <Loading v-if="load" />
        <div class="row">
            <div class="col-12 col-lg-4 col-md-6" v-for="estacion in estaciones" :key="estacion.id">
                <CardEstacion :data="estacion" class="m-3" />
            </div>
        </div>

    </div>
</template>


<script> 

import CardEstacion from '../components/CardEstacion.vue'
import Loading from '../components/Loading.vue'

export default {

  components: {CardEstacion, Loading},

  data: () => ({
        estaciones: {},
        load: false
    }),

    created(){
        this.getEstacion();
    },
    methods: {
        async getEstacion(){
            const url = 'https://cors-anywhere.herokuapp.com/';
            this.load = true;
            const {data} = await this.axios.get(`${url}https://api.deezer.com/radio&index=0&limit=10`);
            console.log(data);
            this.estaciones = data.data;
            this.load = false
        }
    }
}
</script>


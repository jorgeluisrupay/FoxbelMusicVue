
<template>
  <div class="container">
        <h1 class="text-center"> {{peticion}} </h1>
        <hr>
        <Loading v-if="load" />
        <div class="row">
            <div class="col-12 col-lg-4 col-md-6" v-for="peticion in peticiones" :key="peticion.id">
                <Card :data="peticion" class="m-3" />
            </div>
        </div>

    </div>
</template>




<script>

import Card from './Card.vue'
import Loading from './Loading.vue'

export default {

    components: {Card, Loading},

    props: {
        peticion: String,
    },

  data: () => ({
        peticiones: {},
        load: false
    }),

    created(){
        this.getPeticiones(peticion);
    },
    methods: {
        async getPeticiones(peticion="rock"){
            const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/';
            this.load = true;
            const {data} = await this.axios.get(`${url}artist/?q=${peticion}s&index=0&limit=10`);
            //console.log(data);
            this.peticiones = data.data;
            this.load = false;
            console.log(peticion);
        }
    }
}
</script>
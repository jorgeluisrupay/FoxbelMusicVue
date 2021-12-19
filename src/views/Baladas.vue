<template>
  <div class="container">
        <h1 class="text-center"> Baladas </h1>
        <hr>
        <Loading v-if="load" />
        <div class="row">
            <div class="col-12 col-lg-4 col-md-6" v-for="balada in baladas" :key="balada.id">
                <Card :data="balada" class="m-3 w-75" />
            </div>
        </div>

    </div>
</template>

<script>

import Card from '../components/Card.vue'
import Loading from '../components/Loading.vue'

export default {

  components: {Card, Loading},

  data: () => ({
        baladas: {},
        load: false
    }),

    created(){
        this.getBaladas();
    },
    methods: {
        async getBaladas(){
            const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/';
            this.load = true;
            const {data} = await this.axios.get(`${url}artist/?q=baladas&index=0&limit=10`);
            // console.log(data);
            this.baladas = data.data;
            this.load = false
        }
    }
}
</script>

<style>

</style>
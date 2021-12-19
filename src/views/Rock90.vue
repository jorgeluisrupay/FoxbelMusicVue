<template>
  <div class="container">
        <h1 class="text-center"> Rock 90s </h1>
        <hr>
        <Loading v-if="load" />
        <div class="row">
            <div class="col-12 col-lg-4 col-md-6" v-for="rock in rocks" :key="rock.id">
                <Card :data="rock" class="m-3" />
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
        rocks: {},
        load: false
    }),

    created(){
        this.getRocks();
    },
    methods: {
        async getRocks(){
            const url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/';
            this.load = true;
            const {data} = await this.axios.get(`${url}artist/?q=rocks&index=0&limit=10`);
            //console.log(data);
            this.rocks = data.data;
            this.load = false
        }
    }
}
</script>

<style>

</style>
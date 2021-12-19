<template>
    <div class="container">
        <search @accion="getArtista" />
                <CardReciente :data="artistas[0]"  />
        <br>
        <h3>Resultados</h3>
        <Loading v-if="load" />
        <div class="row">
            <div class="col-12 col-lg-3 col-sm-4" v-for="artista in artistas" :key="artista.id">
                <Card :data="artista" class=" w-75" />
            </div>
        </div>

    </div>
</template>

<script>
import Card from '../components/Card.vue';
import CardReciente from '../components/CardReciente.vue';
import Search from '../components/Search.vue';
import Loading from '../components/Loading.vue';
export default {
  components: { Card, Search, Loading, CardReciente },

    data: () => ({
        artistas: {},
        load: false
    }),

    created(){
        this.getArtista();
    },
    methods: {
        async getArtista(search = "adele"){
          const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/"
            this.load = true;
            const {data} = await this.axios.get(`${url}artist/?q=${search}&index=0&limit=10`);
            console.log(data);
            this.artistas = data.data;
            this.load = false
            // console.log(this.artistas);
            //console.log(search);
            
        }
    }

}
</script>

<style scoped>
  h3{
    color: #E86060
  }
</style>


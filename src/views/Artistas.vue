<template>
    <div class="container">
        <search @accion="getArtista" />
        <br>
        <h3>Resultado</h3>
        <hr>
        <Loading v-if="load" />
        <div class="row">
            <div class="col-12 col-lg-4 col-sm-6" v-for="artista in artistas" :key="artista.id">
                <Card :data="artista" class="m-3 w-75" />
            </div>
        </div>

    </div>
</template>

<script>
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import Loading from '../components/Loading.vue';
export default {
  components: { Card, Search, Loading },

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
            //console.log(data);
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
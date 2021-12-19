<template>
  <form @submit.prevent="ejecutarPeticion">
    <div class="mb-3 px-3 buscador">
      <input
        placeholder="Buscar"
        type="text"
        class="form-control w-50"
        v-model="search"
        autocomplete="off"
      />
      <div class="usuario">
          <i class="fas fa-user">&nbsp;&nbsp;<b>Jorge Luis</b></i>
      </div>
    </div>
    <!-- <button type="submit" class="btn btn-primary">Search</button> -->
  </form>
</template>

<script>
export default {

    data: () => ({
        search: "",
    }),

    methods: { 
        ejecutarPeticion(){
            this.$emit("accion", this.search)
            this.search = ""
        }
        
     }
};
</script>

<style scoped>

    .buscador{
        display: flex;
        justify-content: space-between;
    }
    input{
        border-radius: 30px;
    }
    i{
        color: #E86060;
    }
    b{
        color: #4F4F4F;
        font-size: 16px;
        font-weight: 400;
        line-height:20px;
    }
    @media screen and (max-width: 750px){
    input{
        position: relative;
    }
    
}
</style>
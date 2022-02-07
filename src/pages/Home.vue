<template>
  <div id="home">
      <div class="lista-filmes">

        <div class="loading" v-if="isLoadding">
          <img src="../assets/loading-buffering.gif" alt="">
        </div>
        <div v-else>
          <article v-for="item in filmes" :key="item.id" class="filme" >
            <strong>{{item.nome}}</strong>
            <img :src="item.foto" alt="Capa" />
            <router-link to="/">Acessar</router-link>
          </article>
        </div>
        

      </div>
  </div>
</template>

<script>
import Api from '../services/api'
export default {
    name: "home",
    data(){
      return {
        filmes: [],
        isLoadding: true,
      }
    },
    async created(){
      this.isLoadding = true;
      const api = await Api.get('?api=filmes')
      this.filmes = api.data || [];
      console.log(this.filmes)
      this.isLoadding = false;
    }
}
</script>

<style scoped>

.loading img{
  height: 60px;
}
</style>
<template>
  <div id="home">
      <div class="lista-filmes">
          
      <div class="loading" v-if="isLoadding">
        <Loading />
      </div>
      <div v-else>
        <article v-for="item in filmes" :key="item.id" class="filme" >
          <strong class="title">{{item.nome}}</strong>
          <img :src="item.foto" :alt="item.nome" />
          <router-link :to="{name: 'filme', params: {id: item.id}}" class="btn-acessar">Acessar</router-link>
        </article>
      </div>
        

      </div>
  </div>
</template>

<script>
import Api from '../services/api'
import Loading from '../components/Loading.vue'
export default {
    name: "home",
    data(){
      return {
        filmes: [],
        isLoadding: true,
      }
    },
    components: {
      Loading
    },
    async created(){
      this.isLoadding = true;
      const response = await Api.get('?api=filmes')
      this.filmes = response.data || [];
      this.isLoadding = false;
    }
}
</script>

<style scoped>

.filme:not(:first-child){
  margin-top: 20px;
}
.filme{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px 15px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0,0,0,.1);
}
.filme .title{
  margin-bottom: 15px;
}
.filme .btn-acessar{
  background-color: brown;
  padding: 15px;
  display: flex;
  justify-content: center;
  width: 100%;
  color: #FFF;
  text-decoration: none;
  border-radius: 0px 0px 10px 10px;
  font-size: 18px;
}
</style>
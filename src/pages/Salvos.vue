<template>
  <div id="salvos">
      <h2>Meus filmes</h2>
      <ul>
        <li v-for="item in list" :key="item.id">
          <strong>{{item.nome}}</strong>
          <div class="buttons">
            <router-link :to="{name: 'filme', params : {id : item.id}}" tag="button">Ver detalhes</router-link>
            <button @click="excluir(item.id)">Excluir</button>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "salvos",
    data(){
      return {
        list: [],
      }
    },
    methods:{
      excluir(id){
        let listaDeFilmes = this.list.filter(item => {return (item.id !== id)});
        localStorage.setItem("filmes-salvos", JSON.stringify(listaDeFilmes))
        this.list = listaDeFilmes;
      }
    },
    created(){
      this.list = JSON.parse(localStorage.getItem("filmes-salvos")) || []
    }
}
</script>

<style scoped>
#salvos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
ul {
  list-style: none;
  width: 80%;
  max-width: 450px;
  margin-top: 20px;
}
ul li{
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  margin-top: 5px;
}
button{
  cursor: pointer;
  margin: 0px 4px;
  border: none;
  background-color: #EEE;
  padding: 5px;
  border-radius: 3px;
  transition: all ease-in-out .2s;
}
button:hover{
  background-color: brown;
  color: #FFF;
}
</style>
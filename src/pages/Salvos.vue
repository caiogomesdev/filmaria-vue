<template>
  <div id="salvos">
      <h2>Meus filmes</h2>
      <div class="content">
      <p class="noitems" v-if="list < 1">Você não tem filmes salvos.</p>
      <ul v-else>
        <li v-for="item in list" :key="item.id" id="item">
          <strong>{{item.nome}}</strong>
          <div class="buttons" id="buttons">
            <router-link :to="{name: 'filme', params : {id : item.id}}" tag="button">Ver detalhes</router-link>
            <button @click="excluir(item.id)">Excluir</button>
          </div>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
    name: "salvos",
    data(){
      return {
        list: [],
        namesRoot: []
      }
    },
    methods:{
      excluir(id){
        let listaDeFilmes = this.list.filter(item => {return (item.id !== id)});
        localStorage.setItem("filmes-salvos", JSON.stringify(listaDeFilmes))
        this.list = listaDeFilmes;
      },
      formatName(){

        const max = Math.floor((document.querySelector('#buttons').offsetLeft - document.querySelector('#item').offsetLeft)/10);
        this.list.map((item, i) => {
          let nameTemp = this.namesRoot[i]
          let len = nameTemp.length
          item.nome = nameTemp.substr(0, max -3)
          
          if(max < len) item.nome += "..."
        })
      }
    },
    created(){
      this.list = JSON.parse(localStorage.getItem("filmes-salvos")) || [];
      
      this.list.map(item =>{
        this.namesRoot.push(item.nome);
      })
      window.addEventListener("resize", this.formatName);
    },
    mounted(){
      this.formatName()
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
.content{
  width: 80%;
  max-width: 450px;
  margin-top: 20px;
}
.noitems{
  text-align: center;
}
ul {
  list-style: none;
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
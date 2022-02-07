<template>
  <div id="filme">
      <div class="loading" v-if="isLoading">
          <Loading />
      </div>
      <div class="container" v-else>
        <h2 class="title">{{filme.nome}}</h2>
        <img :src="filme.foto" alt="">
        <h3>Sinopse</h3>
        <p>{{filme.sinopse}}</p>
        <div class="buttons">
            <router-link :to="{name: 'home'}" tag="button">Ver mais filmes</router-link>
            <button @click="save" :class="{active : isSave}">{{isSave ? 'Remover' : 'Salvar'}}</button>
            
            <a :href="`https://www.youtube.com/results?search_query=${filme.nome}`" target="_blank">
                <button>
                    Trailer
                </button>
            </a>

        </div>
      </div>
      
  </div>
</template>

<script>
import api from '../services/api';
import Loading from '../components/Loading.vue'
export default {
    name: "filme",
    props:['id'],
    components:{
        Loading
    },
    data(){
        return{
            filme: [],
            isLoading: true,
            filmesSalvos: [],
            isSave: false
        }
    },
    methods: {
        save(){
            if(!this.filmesSalvos.find(item => item.id === this.id)){
                this.filmesSalvos.push(this.filme)
                this.isSave = true
            }
            else{
                this.filmesSalvos.splice(this.filmesSalvos.indexOf(this.id),1)
                this.isSave = false
            }
            localStorage.setItem("filmes-salvos", JSON.stringify(this.filmesSalvos))
        },
            getFilmesSalvos(){
            const ls = JSON.parse(localStorage.getItem("filmes-salvos"))
            this.filmesSalvos = ls || []
            this.isSave = this.filmesSalvos.find(item => item.id === this.id)
        }
    },
    async created(){
        this.isLoading = true;
        const response = await api.get(`?api=filmes/${this.id}`);
        this.filme = response.data;
        this.isLoading = false;
        this.getFilmesSalvos();
    },
}
</script>

<style scoped>
#filme{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 700px;
}
.title{
    color: #FFF;
    background-color: brown;
    padding: 15px 15px 10px 15px;
    border-radius: 20px 20px 0px 0px;
    width: 100%;
    font-size: 22px;
}
img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    border-radius: 0px 0px 20px 20px;
}
h3 {
    margin: 15px 0px 20px 0px;
    font-weight: bold;
}
.buttons{
    margin-top: 20px;
}
button{
    cursor: pointer;
    margin-left: 3px;
    padding: 6px 6px;
    border: none;
    background-color: #EEE;
    border-radius: 4px;
    transition: all ease-in-out .1s;
}
button:hover, .active{
    background-color: brown;
    color: #FFF;

}
a{
    color: #000;
    text-decoration: none;
}

</style>
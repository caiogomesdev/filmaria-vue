import Axios from 'axios'

//URL : https://sujeitoprogramador.com/r-api/?api=filmes
const api = Axios.create({
    baseURL: 'https://sujeitoprogramador.com/r-api'
})

export default api;
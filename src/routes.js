import Router from 'vue-router'
import Vue from 'vue'

import Home from './pages/Home'
import Salvos from './pages/Salvos'
import Erro from './pages/404'
import Filme from './pages/Filme'

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        {path: "/", name: "home", component: Home},
        {path: "/salvos", name: "salvos", component: Salvos},
        {path: '/filme/:id', name: "filme", component: Filme, props: true},
        {path: "*", component: Erro}
    ]
})

export default router;
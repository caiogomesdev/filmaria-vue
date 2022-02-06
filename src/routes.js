import Router from 'vue-router'
import Vue from 'vue'
import Home from './pages/Home'
import Error from './pages/404'
Vue.use(Router)

const router = new Router({
    mode:'history',
    routes: [
        {path: "/", component: Home},
        {path: "*", component: Error}
    ]
})

export default router;
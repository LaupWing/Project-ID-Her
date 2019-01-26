import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import StartScherm from './components/startScherm/Startscherm.vue'

import ManOfVrouw from './components/gebruikersInput/InputPaginas/ManOfVrouw.vue'
import LeeftijdAfkomst from './components/gebruikersInput/InputPaginas/leeftijdAfkomst.vue'
import Adres from './components/gebruikersInput/InputPaginas/Adres.vue'
import Veilig from './components/gebruikersInput/InputPaginas/Veiligheid.vue'
import Vraag1 from './components/gebruikersInput/InputPaginas/Vraag1.vue'
import Vraag2 from './components/gebruikersInput/InputPaginas/Vraag2.vue'
import Vraag3 from './components/gebruikersInput/InputPaginas/Vraag3.vue'
import Vraag4 from './components/gebruikersInput/InputPaginas/Vraag4.vue'
import Vraag5 from './components/gebruikersInput/InputPaginas/Vraag5.vue'
import Vraag6 from './components/gebruikersInput/InputPaginas/Vraag6.vue'
import Vraag7 from './components/gebruikersInput/InputPaginas/Vraag7.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {path: '/', component: StartScherm},
    {path: '/geslacht', component: ManOfVrouw},
    {path: '/leeftijdAfkomst', component: LeeftijdAfkomst},
    {path: '/adres', component: Adres},
    {path: '/veilig', component: Veilig},
    {path: '/vraag1', component: Vraag1},
    {path: '/vraag2', component: Vraag2},
    {path: '/vraag3', component: Vraag3},
    {path: '/vraag4', component: Vraag4},
    {path: '/vraag5', component: Vraag5},
    {path: '/vraag6', component: Vraag6},
    {path: '/vraag7', component: Vraag7},
]

const router = new VueRouter({
    routes,
    mode:'history'

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

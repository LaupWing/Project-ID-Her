import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import StartScherm from './components/startScherm/Startscherm.vue'

// Intro
import Intro1 from './components/gebruikersInput/InputPaginas/Intro1.vue'
import Intro2 from './components/gebruikersInput/InputPaginas/Intro2.vue'
import Intro3 from './components/gebruikersInput/InputPaginas/Intro3.vue'

import ManOfVrouw from './components/gebruikersInput/InputPaginas/ManOfVrouw.vue'
import LeeftijdAfkomst from './components/gebruikersInput/InputPaginas/leeftijdAfkomst.vue'
import Adres from './components/gebruikersInput/InputPaginas/Adres.vue'
import Veilig from './components/gebruikersInput/InputPaginas/Veiligheid.vue'
import Vraag1 from './components/gebruikersInput/InputPaginas/Vraag1.vue'
import Vraag2 from './components/gebruikersInput/InputPaginas/Vraag2.vue'
import PolitieIntro from './components/gebruikersInput/InputPaginas/Politie-intro.vue'
import Vraag3 from './components/gebruikersInput/InputPaginas/Vraag3.vue'
import Vraag4 from './components/gebruikersInput/InputPaginas/Vraag4.vue'
import Resultaten from './components/gebruikersInput/InputPaginas/Resultaten.vue'
Vue.config.productionTip = false

// ResultatenComponents
import StartResultaat from './components/gebruikersInput/InputPaginas/ResultatenComponents/Start-resultaat.vue'
import DelenResultaat from './components/gebruikersInput/InputPaginas/ResultatenComponents/Delen-resultaat.vue'
import RecentResultaat from './components/gebruikersInput/InputPaginas/ResultatenComponents/Recent-resultaat.vue'
import VeiligResultaat from './components/gebruikersInput/InputPaginas/ResultatenComponents/Veilig-resultaat.vue'
import VragenResultaat from './components/gebruikersInput/InputPaginas/ResultatenComponents/Vragen-resultaat.vue'


Vue.use(VueRouter)

const routes = [
    {path: '/', component: StartScherm},
    {path: '/intro1', component: Intro1},
    {path: '/intro2', component: Intro2},
    {path: '/intro3', component: Intro3},
    {path: '/geslacht', component: ManOfVrouw},
    {path: '/leeftijdAfkomst', component: LeeftijdAfkomst},
    {path: '/adres', component: Adres},
    {path: '/veilig', component: Veilig},
    {path: '/vraag1', component: Vraag1},
    {path: '/vraag2', component: Vraag2},
    {path: '/politie-intro', component: PolitieIntro},
    {path: '/vraag3', component: Vraag3},
    {path: '/vraag4', component: Vraag4},
    {
        path: '/resultaten', 
        component: Resultaten,
        children:[
            {
                path: '',
                component: StartResultaat
            },
            {
                path: 'deel-resultaat',
                component: DelenResultaat
            },
            {
                path: 'recent-resultaat',
                component: RecentResultaat           
            },
            {
                path: 'vragen-resultaat',
                component: VragenResultaat           
            },
            {
                path: 'veilig-resultaat',
                component: VeiligResultaat           
            },
        ]
    
    },
]

const router = new VueRouter({
    routes,
    mode:'history'

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

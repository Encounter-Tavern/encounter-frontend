import Vue from 'vue';
import VueRouter from 'vue-router';
import EncounterGenerator from '../views/EncounterGenerator';
import Encounter from '../views/Encounter';
import EncounterList from '../views/EncounterList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/generator",
    name: "Encounter-Generator",
    component: EncounterGenerator
  },
  {
    path: "/encounters/:id",
    name: "Encounter",
    component: Encounter
  },
  {
    path: "/encounters",
    name: "All Encounters",
    component: EncounterList
  }
]

const router = new VueRouter({
  routes
})

export default router

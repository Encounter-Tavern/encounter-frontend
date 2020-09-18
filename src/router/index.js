import Vue from 'vue';
import VueRouter from 'vue-router';
import EncounterGenerator from '../views/EncounterGenerator';
import Encounter from '../views/Encounter';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Encounter-Generator',
    component: EncounterGenerator
  },
  {
    path: "/encounters/:id",
    name: "Encounter",
    component: Encounter
  }
]

const router = new VueRouter({
  routes
})

export default router

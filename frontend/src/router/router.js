import { createWebHashHistory, createRouter } from "vue-router";

const Home = () => import('../views/Home.vue')
const WhoAreWe = () => import('../views/WhoAreWe.vue')
const Recipes = () => import('../views/Recipes.vue')

const routes = [{
  path: '/',
  component: Home,
  name: 'home'
}, {
  path: '/whoAreWe',
  component: WhoAreWe,
  name: 'whoAreWe'
}, {
  path: '/recipes',
  component: Recipes,
  name: 'recipes'
}]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
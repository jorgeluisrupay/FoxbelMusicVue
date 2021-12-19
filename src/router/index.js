import { createRouter, createWebHistory } from 'vue-router'
import Reciente from '../views/Reciente.vue'

const routes = [
  {
    path: '/',
    name: 'Reciente',
    component: Reciente
  },
  {
    path: '/artistas',
    name: 'Artistas',
    // route level code-splitting
    // this generates a separate chunk (artistas.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "artistas" */ '../views/Artistas.vue')
  }
  ,
  {
    path: '/albums',
    name: 'Albums',
    // route level code-splitting
    // this generates a separate chunk (albums.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "albums" */ '../views/Albums.vue')
  },
  {
    path: '/canciones',
    name: 'Canciones',
    // route level code-splitting
    // this generates a separate chunk (canciones.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "canciones" */ '../views/Canciones.vue')
  },
  {
    path: '/estaciones',
    name: 'Estaciones',
    // route level code-splitting
    // this generates a separate chunk (estaciones.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "estaciones" */ '../views/Estaciones.vue')
  },
  {
    path: '/metal',
    name: 'Metal',
    // route level code-splitting
    // this generates a separate chunk (metal.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "metal" */ '../views/Metal.vue')
  },
  {
    path: '/parabailar',
    name: 'ParaBailar',
    // route level code-splitting
    // this generates a separate chunk (parabailar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "parabailar" */ '../views/ParaBailar.vue')
  },
  {
    path: '/rock90',
    name: 'Rock90',
    // route level code-splitting
    // this generates a separate chunk (rock90s.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "rock90" */ '../views/Rock90.vue')
  },
  {
    path: '/baladas',
    name: 'Baladas',
    // route level code-splitting
    // this generates a separate chunk (baladas.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "baladas" */ '../views/Baladas.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import PokemonView from '@/views/PokemonView.vue';
import ErrorView from '@/views/ErrorView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pokemon/:pokemonName',
      name: 'pokemon',
      component: PokemonView
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView
    }
  ]
});

export default router;

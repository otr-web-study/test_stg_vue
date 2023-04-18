import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage';
import NotFound from '@/pages/NotFound';
import CharactersPage from '@/pages/CharactersPage';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharactersPage
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

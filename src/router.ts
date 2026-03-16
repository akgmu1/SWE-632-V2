import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { HomeState } from './enums'

const ROUTES: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    props: () => ({
      state: HomeState.Default,
    }),
  },
  {
    path: '/edit',
    name: 'Edit',
    component: HomeView,
    props: () => ({
      state: HomeState.Update,
    }),
  },
  {
    path: '/delete',
    name: 'Delete',
    component: HomeView,
    props: () => ({
      state: HomeState.Delete,
    }),
  },
  {
    path: '/create',
    name: 'Create Task',
    component: () => import('@/views/CreateTaskView.vue'),
  },
  {
    path: '/stats',
    name: 'Statistics',
    component: () => import('@/views/StatsView.vue'),
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/CategoriesView.vue'),
  },
]

const IS_DEV = import.meta.env.DEV
if (IS_DEV) {
  ROUTES.push({
    path: '/debug',
    component: () => import('@/views/DebugView.vue'),
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ROUTES,
})

export default router

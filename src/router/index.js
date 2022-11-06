import { createRouter, createWebHistory } from "vue-router";

import TodoListPage from '../pages/todolist/TodoListPage.vue'
import Index from '../pages/index/Index.vue'

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index
  },
  {
    name: 'todolist',
    path: '/todolist',
    component: TodoListPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Hotel from '../views/Hotel.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotel',
    name: 'Hotel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Hotel
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded: Solamente se cargan cuando se necesitan, haciendo que la aplicación sea más rápida y ligera, lo que mejora la experiencia de usuario
    component: () => import('../views/Profile.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router

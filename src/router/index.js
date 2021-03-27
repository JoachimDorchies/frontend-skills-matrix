import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../views/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
});

export default router;

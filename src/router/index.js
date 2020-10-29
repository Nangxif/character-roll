import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/Index',
    name: 'Index',
    component: Index
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  }
];

const router = new VueRouter({
  routes
});

export default router;

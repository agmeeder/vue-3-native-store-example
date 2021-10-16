import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import CounterStats from "../views/CounterStats.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/counter-stats",
    name: "Counter Stats",
    component: CounterStats,
  },
  {
    path: "/coffees",
    name: "Coffees",
    component: () => import('../views/Coffees.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router

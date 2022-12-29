import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import NewDashboard from "../views/NewDashboard.vue";
import Trading from "@/views/Trading.vue";
import GridLayout from "@/views/GridLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/newdashboard",
      name: "newDashboard",
      component: NewDashboard,
    },
    {
      path: "/trading",
      name: "Trading",
      component: Trading,
    },
    {
      path: "/grid",
      name: "Grid",
      component: GridLayout,
    },
//    {
//      path: "/about",
//      name: "about",
//      // route level code-splitting
//      // this generates a separate chunk (About.[hash].js) for this route
//      // which is lazy-loaded when the route is visited.
//      component: () => import("../views/AboutView.vue"),
//    },
//    {
//      path: "/counter",
//      name: "counter",
//      component: () => import("../views/CounterView.vue"),
//    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import NewDashboard from "../views/NewDashboard.vue";
import TradingView from "@/views/Trading.vue";
import gridview from "@/views/gridview";
import Trading from "@/views/Trading.vue";
import GridLayout from "@/views/DashboardGrid.vue";
import CookingView from "@/views/Cooking.vue";
import Todo from "@/views/Todo.vue";

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
      name: "TradingView",
      component: TradingView,
    },
    {
      path: "/gridview",
      name: "gridView",
      component: gridview,
    },
    {
      path: "/trading2",
      name: "Trading",
      component: Trading,
    },
    {
      path: "/grid",
      name: "Grid",
      component: GridLayout,
    },
    {
      path: "/cooking",
      name: "Cooking",
      component: CookingView
    },
    {
      path: "/todo",
      name: "ToDo",
      component: Todo
    }
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

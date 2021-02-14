import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    redirect: "/all",
  },
  {
    path: "/all",
    name: "Home",
    component: Home,
  },
  {
    path: "/hindi",
    name: "Hindi",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HindiMovie.vue"),
  },
  {
    path: "/english",
    name: "English",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EnglishMovie.vue"),
  },
  {
    path: "/details/:id",
    name: "details",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Details.vue"),
  },

  {
    path: "/create",
    name: "add",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddMovie.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

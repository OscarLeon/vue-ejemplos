import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todo-list",
    name: "TodoList",
    component: () => import("../views/TodoList.vue"),
  },
  {
    path: "/tombola-study",
    name: "TombolaStudy",
    component: () => import("../views/TombolaStudy.vue"),
  },
  {
    path: "/nutrisoft",
    name: "NutriSoft",
    component: () => import("../views/NutriSoft.vue"),
  },
  {
    path: "/firebase",
    name: "FireBase",
    component: () => import("../views/FireBase.vue"),
  },
  {
    path: "/html-pdf",
    name: "HtmlPdf",
    component: () => import("../views/HtmlPdf.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

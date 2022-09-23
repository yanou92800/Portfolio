import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import projects from "../projects/projects.vue";
import aboutMe from "../aboutMe/aboutMe.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: projects,
  },
  {
    path: "/aboutMe",
    name: "AboutMe",
    component: aboutMe,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

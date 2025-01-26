import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import NewsView from "@/views/NewsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import FluentLauncherPrivacyView from "@/views/fluent-launcher/PrivacyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/fluent-launcher/privacy",
      name: "Fluent Launcher Privacy",
      component: FluentLauncherPrivacyView
    },
    { 
      path: "/notfound", 
      name: "notfound", 
      component: NotFoundView 
    },
    { 
      path: "/:pathMatch(.*)*", 
      redirect: "/notfound"
    },
  ],
});

export default router;

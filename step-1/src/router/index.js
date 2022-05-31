import { createRouter, createWebHistory } from "vue-router";
import EventList from "@/views/events/EventList.vue";
import EventDetails from "@/views/events/EventDetails.vue";
import EventCreate from "@/views/events/EventCreate.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "events",
      component: EventList,
    },
    {
      path: "/events/:id",
      name: "events.show",
      props: true,
      component: EventDetails,
    },
    {
      path: "/events/create",
      name: "events.create",
      component: EventCreate,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;

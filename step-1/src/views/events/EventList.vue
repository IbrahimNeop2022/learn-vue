<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
import { watchEffect } from "vue";
</script>

<template>
  <div class="events">
    <h1>Events List</h1>
    <EventCard
      v-for="event in events"
      :event="event"
      @delete-event="deleteEvent"
    />
    <router-link
      :to="{ name: 'events', query: { page: page - 1 } }"
      v-if="page != 1"
      rel="prev"
    >
      Prev Page
    </router-link>
    <router-link :to="{ name: 'events', query: { page: page + 1 } }" rel="next">
      Next Page
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["page"],
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },

  created() {
    watchEffect(() => {
      // this.events = null;
      EventService.getEvents(this.page)
        .then((response) => {
          this.events = response.data.data;
          this.totalEvents = response.data.total;
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },

  computed: {
    hasNextPage() {},
  },

  methods: {
    deleteEvent(eventId) {
      this.events = this.events.filter(function (event) {
        return event.id !== eventId;
      });
    },
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.events h1 {
  margin-bottom: 10px;
}
</style>

<script setup>
import EventCard from "@/components/EventCard.vue";
import axios from "axios";
</script>

<template>
  <div class="events">
    <h1>Events List</h1>
    <EventCard v-for="event in events" :event="event" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: null,
    };
  },

  created() {
    axios
      .get("https://vue-backend.local/api/events")
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
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

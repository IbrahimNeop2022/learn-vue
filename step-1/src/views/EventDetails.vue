<script setup>
import EventService from "@/services/EventService.js";
</script>

<template>
  <div v-if="event" class="event">
    <h1>{{ event.title }}</h1>
    <p>@ {{ event.time }} on {{ event.date }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },

  created() {
    EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>

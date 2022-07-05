<script setup>
import EventService from "@/services/EventService";
</script>
<template>
  <button
    @click="deleteEvent(event.id)"
    type="button"
    class="btn-close btn-close-red"
    aria-label="Close"
  ></button>
  <router-link :to="{ name: 'events.show', params: { id: event.id } }">
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
  data() {
    return {};
  },
  methods: {
    deleteEvent(eventId) {
      EventService.deleteEvent(eventId)
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$emit("delete-event", eventId);
    },
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #333;
  margin-bottom: 20px;
  text-align: center;
}
.event-card h4 {
  font-size: 20px;
}

.event-card:hover {
  border: 2px solid #0086c4;
}
</style>

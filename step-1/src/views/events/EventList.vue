<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
</script>

<template>
  <div class="events">
    <h1>Events List</h1>
    <EventCard v-for="event in events" :event="event" @delete-event="deleteEvent"/>
  </div>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return {
      events: null,
    };
  },

  created() {
    EventService.getEvents(this.page)
      .then((response) => {
        this.events = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods:{
    deleteEvent(eventId){
      this.events = this.events.filter(function(event) {
          return event.id !== eventId
      })
    }
  }
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

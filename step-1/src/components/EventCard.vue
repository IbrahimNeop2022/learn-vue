<template>
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
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
  border: 1px solid #0086c4;
}
</style>

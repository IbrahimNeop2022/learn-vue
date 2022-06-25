<script setup>
import EventService from '@/services/EventService';
</script>

<template>
  <form class="row g-3" @submit.prevent="store()">
    <div class="col-md-6">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        v-model="title"
        id="title"
        placeholder="Enter Title"
      />
    </div>
    <div class="col-md-6">
      <label for="category" class="form-label">Category</label>
      <select v-model="category" id="category" class="form-select">
        <option selected>Choose...</option>
        <option>Category 1</option>
        <option>Category 2</option>
      </select>
    </div>
    <div class="col-12">
      <label for="description" class="form-label">Description</label>
      <textarea
        class="form-control"
        v-model="description"
        id="description"
        placeholder="Enter description"
      ></textarea>
    </div>
    <div class="col-md-4">
      <label  for="location" class="form-label">Location</label>
      <input
        type="text"
        v-model="location"
        class="form-control"
        id="location"
        placeholder="Enter Location"
      />
    </div>
    <div class="col-md-4">
      <label for="date" class="form-label">Date</label>
      <input v-model="date" type="date" class="form-control" id="date" />
    </div>
    <div class="col-md-4">
      <label for="time" class="form-label">Time</label>
      <input v-model="time" type="time" class="form-control" id="time" />
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title:null,
      category:null,
      description:null,
      location:null,
      date:null,
      time:null,
    }
  },
  methods: {
    store(){
      EventService.createEvent({
        title: this.title,
        category: this.category,
        description: this.description,
        location: this.location,
        date: this.date,
        time: this.time,
      }).then((response) => {
        console.log(response.data);
        this.emptying();
      })
      .catch((error) => {
        console.log(error.response.status);
      });
    },
    emptying(){
      this.title = null
      this.category = null
      this.description = null
      this.location = null
      this.date = null
      this.time = null
    
    }

  }
}
</script>

<style scoped></style>

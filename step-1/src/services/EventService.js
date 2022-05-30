import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://vue-backend.local/api",
  headers: {
    Accept: "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};

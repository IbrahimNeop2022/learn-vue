import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://vue-backend.local/api",
  headers: {
    Accept: "application/json",
  },
});

export default {
  getEvents(page) {
    return apiClient.get("/events?page=" + page);
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
  createEvent(data) {
    return apiClient.post("/events/", data);
  },
  deleteEvent(id) {
    return apiClient.delete("/events/" + id);
  },
};

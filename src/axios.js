import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-c058f.cloudfunctions.net/api",
});

export default instance;
// http://127.0.0.1:5001/clone-c058f/us-central1/api

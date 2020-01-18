import axios from "axios";

const api = axios.create({
  baseURL: "https://api.hanukoon.com/dimi-tranding-repo/v1",
  headers: { "Access-Control-Allow-Origin": "*" }
});

export default api;

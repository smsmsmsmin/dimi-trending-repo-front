import axios from "axios";

const api = axios.create({
  baseURL: "http://119.193.65.179:3001/api/v1",
  headers: { "Access-Control-Allow-Origin": "*" }
});

export default api;

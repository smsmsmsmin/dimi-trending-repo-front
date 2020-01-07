import axios from "axios";

const api = axios.create({
    baseURL: "http://docker.hanukoon.com:5000",
    headers: { "Access-Control-Allow-Origin": "*" }
});

export default api;

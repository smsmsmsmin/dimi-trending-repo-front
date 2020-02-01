import axios from "axios";
import SweetAlert from "./swal";

const api = axios.create({
  baseURL: "https://api.dimigo.in",
  headers: {
    "Content-type": "application/json"
  }
});

const dimigoin = {
  login: async (info: { id: string; password: string }) => {
    return await api.post("/auth", info);
  },
  getUserInfo: async (info: { id: string; password: string }) => {
    const token = await dimigoin.login(info);
    await console.log(token);
    return await api.get<{
      idx: number;
      name: string;
      grade: string;
      klass: string;
      number: string;
      serial: string;
      photo: string | null;
      email: string;
      user_type: string;
    }>("/user/jwt", {
      headers: { Authorization: `Bearer ${token.data.token}` }
    });
  }
};

export default dimigoin;

import axios from "axios";

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
    return await api.get("/user/jwt", {
      headers: { Authorization: `Bearer ${token.data.token}` }
    });
  }
};

export default dimigoin;

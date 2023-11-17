import axios from "axios";

const api = axios.create({
    baseURL: "https://namao.online/api/",
});

export default api;

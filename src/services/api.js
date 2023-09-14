import axios from "axios";

// para rodar a API:  json-server --watch -d 180 --host 127.0.0.1 db.json
// para rodar a API: json-server --watch -d 180 --host 192.168.1.7 db.json
const api = axios.create({
    baseURL: "http://192.168.1.6:3333",
});

export default api;

import axios from "axios";
const ambiente = import.meta.env.VITE_BACKEND_API;

export default axios.create({
  baseURL: `${ambiente}`,
  withCredentials: true,
});

import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const axiosService = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
});

const Get = (route, params) => {
  return axiosService.get(route, { params });
};

const Post = (route, body, params) => {
  return axiosService.post(route, body, { params });
};
const Put = (route, body, params) => {
  return axiosService.put(route, body, { params });
};
const Patch = (route, body, params) => {
  return axiosService.patch(route, body, { params });
};

const Delete = (route, params) => {
  return axiosService.delete(route, { params });
};

const http = { Get, Post, Put, Patch, Delete };
export default http;

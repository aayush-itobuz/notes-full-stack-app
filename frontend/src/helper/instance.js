import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:3000/note/',
})

instance.interceptors.request.use(request => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return request;
});
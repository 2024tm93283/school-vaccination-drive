import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001', // backend base URL
});

export default api;

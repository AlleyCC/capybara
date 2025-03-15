import axios from 'axios';

const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
});

// axios request interceptors
http.interceptors.request.use( config => {
  return config
}, e => Promise.reject(e));

// axios response interceptors
http.interceptors.response.use( res => res.data, e => {
  return Promise.reject(e)
});
export default http;

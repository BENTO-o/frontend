import axios from "axios";
import { Agent } from "https";


// const URL = window.location.href;
// const baseURL = "http://221.146.234.20:80";

const withCredentials = true;
const baseURL = "https://221.146.234.20";

const client = axios.create({
  baseURL : baseURL,
  withCredentials : withCredentials,
  httpsAgent: new Agent({
    rejectUnauthorized: false // 자체 서명 인증서 허용
  })
});

// 요청 인터셉터를 추가하여 모든 요청에 대해 헤더를 설정합니다.
client.interceptors.request.use(
    (config) => {
      // 세션 스토리지에서 'token' 값을 가져옵니다.
      const token = sessionStorage.getItem('token');
      // 헤더에 'token' 값을 설정합니다.
      if (token) {
        config.headers['token'] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  
  export default client;
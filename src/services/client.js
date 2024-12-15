import axios from "axios";

const URL = window.location.href;
// const baseURL = "http://221.146.234.20:80";

const withCredentials = true;
// const baseURL = URL.substring(7, 16) === "localhost" ? "http://localhost:8080" : "https://stg.bento-o.site";
const baseURL = URL.substring(7, 16) === "localhost" ? "http://dev.bento-o.site" : "https://stg.bento-o.site";

const client = axios.create({
  baseURL : baseURL,
  withCredentials : withCredentials,
});

// 요청 인터셉터를 추가하여 모든 요청에 대해 헤더를 설정합니다.
client.interceptors.request.use(
    (config) => {
      // 세션 스토리지에서 'token' 값을 가져옵니다.
      const token = sessionStorage.getItem('token');
      // 헤더에 'token' 값을 설정합니다.
      if (token) {
        config.headers['Authorization'] = 'Bearer' + ' ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  

// 응답 인터셉터
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 토큰 유효성 검사 실패(401 Unauthorized)
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 재시도 방지 플래그

      try {
        // Refresh 토큰을 통해 토큰 갱신 요청
        const refreshToken = sessionStorage.getItem("refreshToken");
        const { data } = await axios.post(
          `${baseURL}/users/refresh`, // 갱신 API 엔드포인트
          { refreshToken: refreshToken },
          { withCredentials: true }
        );

        // 새로운 토큰 저장
        sessionStorage.setItem("token", data.accessToken);

        // Authorization 헤더 업데이트
        originalRequest.headers["Authorization"] = "Bearer " + data.accessToken;

        // 기존 요청 재시도
        return client(originalRequest);
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        // Refresh 실패 시 로그아웃 처리 등 추가 로직
        const refreshToken = sessionStorage.getItem("refreshToken");
        const { data } = await axios.post(
          `${baseURL}/users/logout`,
          { refreshToken: refreshToken },
          { withCredentials: true }
        );
        console.log("로그아웃 결과:", data);
        sessionStorage.clear();
        window.location.href = "/login"; // 로그인 페이지로 리다이렉트
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default client;


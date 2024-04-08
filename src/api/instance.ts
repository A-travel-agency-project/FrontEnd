import axios from "axios";
// import { useSetRecoilState } from "recoil";
// import { loginCheck } from "../atom/atom";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

export const userInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
});

export const biztalkIncstance = axios.create({
  baseURL: "https://www.biztalk-api.com",
});

userInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("token");
    const refreshToken = window.localStorage.getItem("refreshToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    if (refreshToken) {
      config.headers["Refresh"] = refreshToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 토큰 갱신 함수
const useGetNewToken = async () => {
  // const setIsLogin = useSetRecoilState(loginCheck);
  try {
    await userInstance
      .get("/auth/reissue", {
        headers: { Refresh: window.localStorage.getItem("refreshToken") },
      })
      .then((res) => {
        console.log("refreshToken", res.data.data.refreshToken);
        window.localStorage.setItem("refreshToken", res.data.data.refreshToken);
        window.localStorage.setItem("token", res.data.data.accessToken);
      });
    return [
      window.localStorage.getItem("token"),
      window.localStorage.getItem("refreshToken"),
    ];
  } catch (error) {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("refreshToken");
    window.localStorage.removeItem("role");
    // setIsLogin(false);
    throw new Error("Token refresh failed");
  }
};

userInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    const { config, response } = error;
    if (
      config.url === "/auth/reissue" ||
      response?.data?.message !== "토큰 유효 시간이 만료되었습니다." ||
      config.retry
    ) {
      console.log(response);
      return Promise.reject(error);
    }

    config.retry = true;
    const newToken = await useGetNewToken();
    if (newToken) {
      config.headers["Authorization"] = `Bearer ${newToken[0]}`;
      config.headers["Refresh"] = newToken[1];
    }
    return userInstance(config);
  }
);

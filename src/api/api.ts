import axios, {type AxiosError, type AxiosRequestConfig, type AxiosResponse,} from "axios";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "../const/localstorage";
import {API_URL} from "../const/api";


const api = axios.create({
    baseURL: API_URL,
});

const bearerString = (token: string): string => `Bearer ${token}`;
const getToken = (key: string): string | null => localStorage.getItem(key);

let isRefreshing = false;

const refreshAccessToken = async () => {
    const refreshToken = getToken(REFRESH_TOKEN);
    if (!refreshToken) return null;

    try {
        const { data } = await axios.post(API_URL + "/auth/refresh", {
            refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = data.details;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, newRefreshToken);
        return accessToken;
    } catch (error) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        // window.location.reload('')
        // await router.push(RoutePath.Login);
    }
};

const setAuthHeader = (config: AxiosRequestConfig) => {
    const accessToken = getToken(ACCESS_TOKEN);
    if (accessToken) {
        config.headers["Authorization"] = bearerString(accessToken);
    }
    return config;
};

api.interceptors.request.use(setAuthHeader, (error: AxiosError) =>
    Promise.reject(error),
);

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig;

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve) => {
                    resolve(null);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const newAccessToken = await refreshAccessToken();
                if (newAccessToken) {
                    originalRequest.headers["Authorization"] =
                        bearerString(newAccessToken);
                    return api(originalRequest);
                }
            } catch (error) {
                return Promise.reject(error);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    },
);

const initializeAuth = (): void => {
    const accessToken = getToken(ACCESS_TOKEN);
    if (accessToken) {
        api.defaults.headers.common["Authorization"] = bearerString(accessToken);
    }
};

export { api, initializeAuth };

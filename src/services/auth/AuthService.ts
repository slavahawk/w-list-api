import { api } from "../../api/api";
import type {
  AuthResponse,
  LoginRequest,
  LogoutRequest,
  Me,
  RefreshTokenRequest,
  RegistrationRequest,
  ResetPasswordRequest,
} from "./types";
import { ServiceError } from "../../error/ServiceError";
import axios from "axios";
import { API_URL } from "../../const/api";

const url = "/auth";

export const AuthService = {
  async register(data: RegistrationRequest): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>(
        API_URL + `${url}/register`,
        data,
      );

      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message || "Registration failed",
        error.response?.status,
      );
    }
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(API_URL + `${url}`, data);
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message || "Неверный логин или пароль",
        error.response?.status,
      );
    }
  },

  async loginCustomer(data: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await axios.post<AuthResponse>(
        API_URL + `${url}/customer`,
        data,
      );
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message || "Неверный логин или пароль",
        error.response?.status,
      );
    }
  },

  async resetPassword(data: ResetPasswordRequest): Promise<any> {
    try {
      const response = await api.post<any>(`${url}/reset-password`, data);
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message || "Reset password failed",
        error.response?.status,
      );
    }
  },

  async logout(data: LogoutRequest): Promise<any> {
    try {
      const response = await api.post<any>(`${url}/logout`, data);
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message || "Logout failed",
        error.response?.status,
      );
    }
  },

  async refreshToken(data: RefreshTokenRequest): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>(`${url}/refresh`, data);
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message || "Refresh token failed",
        error.response?.status,
      );
    }
  },

  async me(): Promise<Me> {
    try {
      const response = await api.post<Me>(`${url}/get-me`);
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message ||
          "Ошибка получения данных о пользователе",
        error.response?.status,
      );
    }
  },
};

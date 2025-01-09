import { api } from "../api/api";
import type {
  AuthResponse,
  LoginRequest,
  LogoutRequest,
  RefreshTokenRequest,
  RegistrationRequest,
  ResetPasswordRequest,
} from "../types/authTypes";
import { AuthServiceError } from "../error/ServiceError";

const url = "/auth";

export const AuthService = {
  async register(data: RegistrationRequest): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>(`${url}/register`, data);

      return response.data;
    } catch (error) {
      throw new AuthServiceError(
        error.response?.data?.message || "Registration failed",
        error.response?.status,
      );
    }
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await api.post<AuthResponse>(`${url}`, data);
      return response.data;
    } catch (error) {
      throw new AuthServiceError(
        error.response?.data?.message || "Login failed",
        error.response?.status,
      );
    }
  },

  async resetPassword(data: ResetPasswordRequest): Promise<any> {
    try {
      const response = await api.post<any>(`${url}/reset-password`, data);
      return response.data;
    } catch (error) {
      throw new AuthServiceError(
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
      throw new AuthServiceError(
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
      throw new AuthServiceError(
        error.response?.data?.message || "Refresh token failed",
        error.response?.status,
      );
    }
  },
};

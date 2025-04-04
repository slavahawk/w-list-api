import { api } from "../../api/api";
import { API_URL } from "../../const/api";
import {
  ForgotPasswordRequest,
  AuthResponse,
  LoginRequest,
  LogoutRequest,
  Me,
  RefreshTokenRequest,
  RegistrationRequest,
  ResetPasswordRequest,
  ApiResponse,
} from "wlist-types";

const url = "/auth";

export const AuthService = {
  async register(data: RegistrationRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      API_URL + `${url}/register`,
      data,
      {
        headers: {
          Authorization: undefined, // Это уберет заголовок Authorization из запроса
        },
      },
    );
    return response.data;
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(API_URL + `${url}`, data, {
      headers: {
        Authorization: undefined, // Это уберет заголовок Authorization из запроса
      },
    });
    return response.data;
  },

  async resetPassword(data: ResetPasswordRequest): Promise<any> {
    const response = await api.post<any>(`${url}/reset-password`, data);
    return response.data;
  },

  async forgotPassword(data: ForgotPasswordRequest): Promise<ApiResponse> {
    const response = await api.post<ApiResponse>(
      `${url}/forgot-password`,
      data,
      {
        headers: {
          Authorization: undefined, // Это уберет заголовок Authorization из запроса
        },
      },
    );
    return response.data;
  },

  async logout(data: LogoutRequest): Promise<any> {
    const response = await api.post<any>(`${url}/logout`, data);
    return response.data;
  },

  async refreshToken(data: RefreshTokenRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(`${url}/refresh`, data);
    return response.data;
  },

  async me(): Promise<Me> {
    const response = await api.post<Me>(`${url}/get-me`);
    return response.data;
  },
};

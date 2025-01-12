export interface AuthDetails {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  success: boolean;
  details: AuthDetails;
}

export interface RegistrationRequest {
  email: string;
  password: string;
  shopName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface LogoutRequest {
  refreshToken: string;
}

export interface RefreshTokenRequest extends LogoutRequest {}

export enum Role {
  ROOT = "ROOT",
  ADMIN = "ADMIN",
  WORKER = "WORKER",
  CUSTOMER = "CUSTOMER",
}

export interface Me {
  id: number;
  email: string;
  role: Role;
  shopId: number;
  createdAt: string;
}

import { api } from "../api/api";
import type { Invitation, InvitationRequest } from "../types/invitationTypes";
import { AuthServiceError } from "../error/ServiceError";

export const InvitationService = {
  async getAll(): Promise<Invitation[]> {
    try {
      const response = await api.get("/invitations");
      return response.data;
    } catch (error) {
      throw new AuthServiceError(
        error.response?.data?.message || "Ошибка при отправке приглашения",
        error.response?.status,
      );
    }
  },

  async send(invitationData: InvitationRequest): Promise<void> {
    try {
      await api.post("/invitations/send", invitationData);
    } catch (error) {
      throw new AuthServiceError(
        error.response?.data?.message || "Ошибка при отправке приглашения:",
        error.response?.status,
      );
    }
  },

  async confirm(token: string): Promise<void> {
    try {
      await api.post(`/invitations/${token}/confirm`);
    } catch (error) {
      throw new AuthServiceError(
        error.response?.data?.message ||
          "Ошибка при подтверждении приглашения с токеном ${token}",
        error.response?.status,
      );
    }
  },
};

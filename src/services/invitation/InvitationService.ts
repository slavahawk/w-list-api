import { api } from "../../api/api";
import type { Invitation, InvitationRequest } from "./types";
import { ServiceError } from "../../error/ServiceError";

export const InvitationService = {
  async getAll(): Promise<Invitation[]> {
    const response = await api.get("/invitations");
    return response.data;
  },

  async send(invitationData: InvitationRequest): Promise<void> {
    await api.post("/invitations/send", invitationData);
  },

  async confirm(token: string): Promise<void> {
    await api.post(`/invitations/${token}/confirm`);
  },
};

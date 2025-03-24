import { api } from "../../api/api";
import type { Invitation, InvitationRequest } from "wlist-types";

const url = "/invitations";

export const InvitationService = {
  async getAll(): Promise<Invitation[]> {
    const response = await api.get(url);
    return response.data;
  },

  async send(invitationData: InvitationRequest): Promise<void> {
    const response = await api.post(`${url}/send`, invitationData);
    return response.data;
  },

  async confirm(token: string, newPassword: string): Promise<void> {
    const response = await api.post(`${url}/${token}/confirm`, { newPassword });
    return response.data;
  },

  async validate(token: string): Promise<void> {
    const response = await api.post(`${url}/${token}/validate`);
    return response.data;
  },
};

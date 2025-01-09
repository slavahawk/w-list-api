import { api } from "../../api/api";
import { GrapeResponse, GrapeRequest } from "./types";

const url = "/grapes";

export const GrapeService = {
  async create(data: GrapeRequest): Promise<GrapeResponse> {
    const response = await api.post<GrapeResponse>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<GrapeResponse> {
    const response = await api.get<GrapeResponse>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: GrapeRequest): Promise<GrapeResponse> {
    const response = await api.put<GrapeResponse>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  },

  async getAll(): Promise<GrapeResponse[]> {
    const response = await api.get<GrapeResponse[]>(`${url}`);
    return response.data;
  },
};

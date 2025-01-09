import { api } from "../api/api";
import type { RegionResponse, UpdateRegionRequest } from "../types/regionTypes";

const url = "/regions";

export const RegionService = {
  async create(data: UpdateRegionRequest): Promise<RegionResponse> {
    const response = await api.post<RegionResponse>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<RegionResponse> {
    const response = await api.get<RegionResponse>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: UpdateRegionRequest): Promise<RegionResponse> {
    const response = await api.put<RegionResponse>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  },

  async getAll(): Promise<RegionResponse[]> {
    const response = await api.get<RegionResponse[]>(`${url}`);
    return response.data;
  },
};

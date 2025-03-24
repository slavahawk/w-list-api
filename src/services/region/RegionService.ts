import { api } from "../../api/api";
import { Region, RegionResponse, UpdateRegionRequest } from "wlist-types";

const url = "/regions";

export const RegionService = {
  async create(data: UpdateRegionRequest): Promise<RegionResponse> {
    const response = await api.post<RegionResponse>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<Region> {
    const response = await api.get<Region>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: UpdateRegionRequest): Promise<Region> {
    const response = await api.put<Region>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<any> {
    const data = await api.delete<any>(`${url}/${id}`);
    return data;
  },

  async getAll(countryId?: number, name?: string): Promise<RegionResponse[]> {
    const response = await api.get<RegionResponse[]>(`${url}`, {
      params: { countryId, name },
    });
    return response.data;
  },
};

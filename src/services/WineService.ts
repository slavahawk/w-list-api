import { api } from "../api/api";
import type {
  WineResponse,
  UpdateWineRequest,
  CreateWineRequest,
} from "../types/wineTypes";

const url = "/wines";

export const WineService = {
  async create(data: CreateWineRequest): Promise<WineResponse> {
    const response = await api.post<WineResponse>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<WineResponse> {
    const response = await api.get<WineResponse>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: UpdateWineRequest): Promise<WineResponse> {
    const response = await api.put<WineResponse>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  },

  async getAll(): Promise<WineResponse[]> {
    const response = await api.get<WineResponse[]>(`${url}`);
    return response.data;
  },

  async search(query: string): Promise<WineResponse[]> {
    const response = await api.get<WineResponse[]>(`${url}/search`, {
      params: { name: query },
    });
    return response.data;
  },
};

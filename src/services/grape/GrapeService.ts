import { api } from "../../api/api";
import { GrapeResponse, GrapeRequest, Grape } from "wlist-types";

const url = "/grapes";

export const GrapeService = {
  async create(data: GrapeRequest): Promise<GrapeResponse> {
    const response = await api.post<GrapeResponse>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<Grape> {
    const response = await api.get<Grape>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: GrapeRequest): Promise<Grape> {
    const response = await api.put<Grape>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<any> {
    const data = await api.delete<any>(`${url}/${id}`);
    return data;
  },

  async getAll(): Promise<GrapeResponse[]> {
    const response = await api.get<GrapeResponse[]>(`${url}`);
    return response.data;
  },
};

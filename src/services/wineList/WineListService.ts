import { api } from "../../api/api";
import { CreateWineListRequest, WineList } from "./types";

const url = "/wine-lists";

export const WineListService = {
  async create(data: CreateWineListRequest): Promise<WineList> {
    const response = await api.post<WineList>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<WineList> {
    const response = await api.get<WineList>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: CreateWineListRequest): Promise<WineList> {
    const response = await api.put<WineList>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  },

  async getAll(): Promise<WineList[]> {
    const response = await api.get<WineList[]>(`${url}`);
    return response.data;
  },
};

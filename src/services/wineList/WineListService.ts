import { api } from "../../api/api";
import { CreateWineListRequest, WineList, WineListActive } from "./types";

const url = "/wine-lists";
const urlActive = "/active-wine-list";

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

  async getActiveList(shopId: number): Promise<WineListActive> {
    const response = await api.get<WineListActive>(`${urlActive}/${shopId}`);
    return response.data;
  },

  async setActiveList(id: number): Promise<WineList> {
    const response = await api.post<WineList>(`${urlActive}`, {
      id,
    });
    return response.data;
  },
};

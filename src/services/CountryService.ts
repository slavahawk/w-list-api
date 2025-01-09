import { api } from "../api/api";
import { CountryResponse, CountryRequest } from "../types/countryTypes";

const url = "/countries";

export const CountryService = {
  async create(data: CountryRequest): Promise<CountryResponse> {
    const response = await api.post<CountryResponse>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<CountryResponse> {
    const response = await api.get<CountryResponse>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: CountryRequest): Promise<CountryResponse> {
    const response = await api.put<CountryResponse>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  },

  async getAll(): Promise<CountryResponse[]> {
    const response = await api.get<CountryResponse[]>(`${url}`);
    return response.data;
  },
};

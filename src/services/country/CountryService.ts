import { api } from "../../api/api";
import { CountryResponse, CountryRequest, Country } from "./types";

const url = "/countries";

export const CountryService = {
  async create(data: CountryRequest): Promise<CountryResponse> {
    const response = await api.post<CountryResponse>(`${url}`, data);
    return response.data;
  },

  async getById(id: number): Promise<Country> {
    const response = await api.get<Country>(`${url}/${id}`);
    return response.data;
  },

  async update(id: number, data: CountryRequest): Promise<Country> {
    const response = await api.put<Country>(`${url}/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<any> {
    const data = await api.delete<any>(`${url}/${id}`);
    return data;
  },

  async getAll(): Promise<CountryResponse[]> {
    const response = await api.get<CountryResponse[]>(`${url}`);
    return response.data;
  },
};

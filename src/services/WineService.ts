import { api } from "../api/api";
import {
  WineResponse,
  UpdateWineRequest,
  CreateWineRequest,
  Wine,
  SearchWineRequest,
  WineRequest,
  WineFiltersRequest,
} from "../types/wineTypes";

const url = "/wines";

export const WineService = {
  async create(data: CreateWineRequest, image: File): Promise<WineResponse> {
    const formData = new FormData();

    if (image) {
      formData.append("image", image, image.name);
    }

    formData.append(
      "request",
      new Blob([JSON.stringify(data)], { type: "application/json" }),
    );

    const response = await api.post<WineResponse>(`${url}`, formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data", // Content-Type could be omitted, FormData will handle it
      },
    });
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

  async updateImage(id: number, image: File): Promise<Wine> {
    const formData = new FormData();
    formData.append("image", image, image.name);
    const response = await api.patch<Wine>(
      `${url}/upload-image/${id}`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await api.delete(`${url}/${id}`);
  },

  async getAll(params: WineRequest): Promise<WineResponse[]> {
    const response = await api.get<WineResponse[]>(`${url}`, { params });
    return response.data;
  },

  async search(params: SearchWineRequest): Promise<WineResponse[]> {
    const response = await api.get<WineResponse[]>(`${url}/search`, {
      params,
    });
    return response.data;
  },

  async getFilter(): Promise<WineFiltersRequest> {
    const response = await api.get<WineFiltersRequest>(`${url}/filters`);
    return response.data;
  },
};

import { api } from "../../api/api"; // Импортируем настроенный экземпляр axios
import type {
  CreateWineList,
  WineListItem,
  WineListItemResponses,
} from "./types";
import { ServiceError } from "../../error/ServiceError"; // Импортируем интерфейс WineListItem

export const WineListItemService = {
  async getAll(listId: number): Promise<WineListItemResponses> {
    try {
      const response = await api.get<WineListItemResponses>(
        `/wine-lists/${listId}/items`,
      );
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message ||
          "Ошибка при получении списка винных позиций",
        error.response?.status,
      );
    }
  },

  async getById(listId: number, itemId: number): Promise<WineListItem> {
    try {
      const response = await api.get<WineListItem>(
        `/wine-lists/${listId}/items/${itemId}`,
      );
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message ||
          `Ошибка при получении винной позиции с ID ${itemId}`,
        error.response?.status,
      );
    }
  },

  async create({
    wineListId,
    wineId,
    pricePerBottle,
    pricePerGlass,
  }: CreateWineList): Promise<WineListItem> {
    try {
      const response = await api.post<WineListItem>(
        `/wine-list-items/${wineListId}/items`,
        { wineId, pricePerBottle, pricePerGlass },
      );
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message || `Ошибка при создании винной позиции`,
        error.response?.status,
      );
    }
  },

  async update(id: number, wineListItemData: Request): Promise<WineListItem> {
    try {
      const response = await api.put<WineListItem>(
        `/wine-list-items/${id}`,
        wineListItemData,
      );
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message ||
          `Ошибка при обновлении винной позиции с ID ${id}`,
        error.response?.status,
      );
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await api.delete(`/wine-list-items/${id}`);
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message ||
          `Ошибка при удалении винной позиции с ID ${id}`,
        error.response?.status,
      );
    }
  },
};

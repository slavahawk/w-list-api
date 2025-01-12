import { api } from "../../api/api"; // Импортируем настроенный экземпляр axios
import {
  CreateWineList,
  Prices,
  WineListItem,
  WineListItemResponses,
} from "./types";
import { ServiceError } from "../../error/ServiceError"; // Импортируем интерфейс WineListItem

const url = "/wine-lists";

export const WineListItemService = {
  async getAll(listId: number): Promise<WineListItemResponses> {
    try {
      const response = await api.get<WineListItemResponses>(
        `${url}/${listId}/items`,
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
        `${url}/${listId}/items/${itemId}`,
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
        `${url}/${wineListId}/items`,
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

  async update(
    listId: number,
    itemId: number,
    data: Prices,
  ): Promise<WineListItem> {
    try {
      const response = await api.put<WineListItem>(
        `${url}/${listId}/items/${itemId}`,
        data,
      );
      return response.data;
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message ||
          `Ошибка при обновлении винной позиции с ID ${itemId}`,
        error.response?.status,
      );
    }
  },

  async delete(listId: number, itemId: number): Promise<void> {
    try {
      await api.delete(`${url}/${listId}/items/${itemId}`);
    } catch (error) {
      throw new ServiceError(
        error.response?.data?.message ||
          `Ошибка при удалении винной позиции с ID ${itemId}`,
        error.response?.status,
      );
    }
  },
};

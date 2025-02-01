import { api } from "../../api/api"; // Импортируем настроенный экземпляр axios
import {
  CreateWineList,
  UpdateWineListItem,
  WineListItem,
  WineListItemRequest,
  WineListItemResponses,
} from "./types";

const url = "/wine-lists";

export const WineListItemService = {
  async getAll(
    listId: number,
    params: WineListItemRequest,
  ): Promise<WineListItemResponses> {
    const response = await api.get<WineListItemResponses>(
      `${url}/${listId}/items`,
      { params },
    );
    return response.data;
  },

  async getById(listId: number, itemId: number): Promise<WineListItem> {
    const response = await api.get<WineListItem>(
      `${url}/${listId}/items/${itemId}`,
    );
    return response.data;
  },

  async create({
    wineListId,
    wineId,
    pricePerBottle,
    pricePerGlass,
    glassVolume,
  }: CreateWineList): Promise<WineListItem> {
    const response = await api.post<WineListItem>(
      `${url}/${wineListId}/items`,
      { wineId, pricePerBottle, pricePerGlass, glassVolume },
    );
    return response.data;
  },

  async update(
    listId: number,
    itemId: number,
    data: UpdateWineListItem,
  ): Promise<WineListItem> {
    const response = await api.put<WineListItem>(
      `${url}/${listId}/items/${itemId}`,
      data,
    );
    return response.data;
  },

  async delete(listId: number, itemId: number): Promise<void> {
    await api.delete(`${url}/${listId}/items/${itemId}`);
  },
};

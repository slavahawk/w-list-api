import { api } from "../../api/api";
import { ActiveWineList } from "./types";

const url = "/active-wine-list";

export const ActiveWineListService = {
  async getActiveListGlass(shopId: number): Promise<ActiveWineList> {
    const response = await api.get<ActiveWineList>(
      `${url}/glass-list/${shopId}`,
    );
    return response.data;
  },

  async getActiveListBottle(shopId: number): Promise<ActiveWineList> {
    const response = await api.get<ActiveWineList>(
      `${url}/bottle-list/${shopId}`,
    );
    return response.data;
  },

  async setActiveList(id: number): Promise<ActiveWineList> {
    const response = await api.post<ActiveWineList>(`${url}`, { id });
    return response.data;
  },
};

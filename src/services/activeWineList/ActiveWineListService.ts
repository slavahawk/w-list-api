import { api } from "../../api/api";
import { ActiveListInfo, ActiveWineList } from "./types";

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

  async getActiveListInfo(shopId: number): Promise<ActiveListInfo> {
    const response = await api.get<ActiveListInfo>(`${url}/get-info/${shopId}`);
    return response.data;
  },
};

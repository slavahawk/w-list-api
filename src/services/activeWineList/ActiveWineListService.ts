import { api } from "../../api/api";
import { ActiveListInfo, ActiveWineList } from "wlist-types";

const url = "/active-wine-list";

export const ActiveWineListService = {
  async getActiveListGlass(shopId: number) {
    const response = await api.get<ActiveWineList>(
      `${url}/glass-list/${shopId}`,
    );
    return response.data;
  },

  async getActiveListBottle(shopId: number) {
    const response = await api.get<ActiveWineList>(
      `${url}/bottle-list/${shopId}`,
    );
    return response.data;
  },

  async setActiveList(id: number) {
    const response = await api.post<ActiveWineList>(`${url}`, { id });
    return response.data;
  },

  async getActiveListInfo(shopId: number) {
    const response = await api.get<ActiveListInfo>(`${url}/get-info/${shopId}`);
    return response.data;
  },
};

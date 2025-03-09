import { Wine } from "../wine";

export interface WineList {
  createdAt: string;
  id: number;
  isActive: boolean;
  isDeleted: boolean;
  itemCount: number;
  name: string;
  shopId: number;
  updatedAt: string;
}

export interface WineListItem {
  id: number;
  wine: Wine;
  pricePerBottle: number;
  pricePerGlass: number;
}

export interface CreateWineListRequest {
  name: string;
}

import type { Wine, WineRoot } from "../wine";

export interface WineListItem {
  id: number;
  name: string;
  createdAt: string; // Date as string (ISO format)
  wines: Wine[];
}

export interface Prices {
  pricePerBottle: number;
  pricePerGlass?: number;
}

export interface CreateWineList extends Prices {
  wineListId: number;
  wineId: number;
}

export interface Shop {
  id: number;
  name: string;
  createdAt: string;
  paidTill?: string;
}

export interface WineListItem {
  createdAt: string;
  id: number;
  isDeleted: boolean;
  isHidden: boolean;
  pricePerBottle: number;
  pricePerGlass: number;
  updatedAt: string;
  wine: Wine;
  wineListId: number;
  shop: Shop;
}

export interface WineListItemResponses {
  page: {
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  _embedded: {
    adminWineResponseList: Wine[];
    rootWineResponseList: WineRoot[];
    rootWineListItemResponseList: WineListItem[];
    adminWineListItemResponseList: WineListItem[];
  };
}

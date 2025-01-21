import { SugarTypeEnum, Wine, WineCategoryEnum, WineColourEnum } from "../wine";

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

interface Item {
  id: number;
  wineListId: number;
  wine: Wine;
  pricePerBottle: number;
  pricePerGlass: number | null;
  links: string[];
}

interface BaseData {
  id: number;
  name: string;
}

interface DataWithItems<T> {
  data: T;
  items: Item[];
}

export interface WineListActive {
  categories: {
    [key: string]: DataWithItems<{
      id: WineCategoryEnum;
      name: WineCategoryEnum;
    }>;
  };
  countries: {
    [key: string]: DataWithItems<BaseData>;
  };
  colours: {
    [key: string]: DataWithItems<{ name: WineColourEnum }>;
  };
  sugarTypes: {
    [key: string]: DataWithItems<{ name: SugarTypeEnum }>;
  };
  regions: {
    [key: string]: DataWithItems<BaseData>;
  };
  grapes: {
    [key: string]: DataWithItems<{ id: number; name: string }>;
  };
  bottleVolumes: {
    [key: string]: DataWithItems<{ volume: number }>;
  };
}

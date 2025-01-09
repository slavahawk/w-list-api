import {Wine} from "./wineTypes";

export interface WineList {
    id: number;
    name: string;
    shopId: number;
    wines: WineListItem[];
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

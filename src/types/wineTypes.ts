export type WineCategory =
  | "SPARKLING"
  | "CHAMPAGNE"
  | "WHITE"
  | "ORANGE"
  | "ROSE"
  | "RED"
  | "DESSERT"
  | "FORTIFIED"
  | "NON_ALCOHOL";

export type WineColour = "RED" | "WHITE" | "ORANGE" | "ROSE";

export type SugarType = "DRY" | "SEMI_DRY" | "SEMI_SWEET" | "SWEET";

export interface Wine {
  id: number;
  name: string;
  category: string;
  colour: string;
  sugarType: string;
  bottleVolume: number;
  alcoholByVolume: number;
  countryId: number;
  regionId?: number;
  grapeIds: number[];
}

export interface WineResponse {
  id: number;
  name: string;
  category: string;
  colour: string;
  sugarType: string;
  bottleVolume: number;
  alcoholByVolume: number;
}

export interface UpdateWineRequest {
  name: string;
  category: string;
  colour: string;
  vintage?: number;
  sugarType: string;
  alcoholByVolume: number;
  bottleVolume: number;
  countryId: number;
  regionId?: number;
  grapeIds: number[];
  interestingFacts?: string;
  organoleptic?: string;
  isHidden?: boolean;
}

export interface CreateWineRequest {
  name: string;
  category: WineCategory;
  colour: WineColour;
  vintage?: number | null; // Optional
  sugarType: SugarType;
  bottleVolume: number;
  alcoholByVolume: number;
  countryId: number;
  regionId?: number; // Optional
  grapeIds: number[];
  interestingFacts?: string; // Optional
  organoleptic?: string; // Optional
  isHidden: boolean;
}

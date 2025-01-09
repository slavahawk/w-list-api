import {
  SugarTypeEnum,
  WineCategoryEnum,
  WineColourEnum,
} from "../services/wine/wineTypes";

export const categoryOptions = [
  { label: "Игристое", value: WineCategoryEnum.SPARKLING },
  { label: "Шампанское", value: WineCategoryEnum.CHAMPAGNE },
  { label: "Белое", value: WineCategoryEnum.WHITE },
  { label: "Оранжевое", value: WineCategoryEnum.ORANGE },
  { label: "Розовое", value: WineCategoryEnum.ROSE },
  { label: "Красное", value: WineCategoryEnum.RED },
  { label: "Десертное", value: WineCategoryEnum.DESSERT },
  { label: "Крепленое", value: WineCategoryEnum.FORTIFIED },
  { label: "Безалкогольное", value: WineCategoryEnum.NON_ALCOHOL },
];

export const colourOptions = [
  { label: "Белое", value: WineColourEnum.WHITE },
  { label: "Оранжевое", value: WineColourEnum.ORANGE },
  { label: "Розовое", value: WineColourEnum.ROSE },
  { label: "Красное", value: WineColourEnum.RED },
];

export const sugarTypesOptions = [
  { label: "Сухое", value: SugarTypeEnum.DRY },
  { label: "Полусухое", value: SugarTypeEnum.SEMI_DRY },
  { label: "Полусладкое", value: SugarTypeEnum.SEMI_SWEET },
  { label: "Сладкое", value: SugarTypeEnum.SWEET },
];

const volumes = [
  0.25, 0.33, 0.375, 0.5, 0.68, 0.7, 0.75, 1.0, 1.5, 3.0, 4.5, 6.0,
];

export const bottleVolumeOptions = volumes.map((volume) => ({
  name: `${volume}л`,
  id: volume,
}));

import {
  SugarTypeEnum,
  WineCategoryEnum,
  WineColourEnum,
} from "../services/wine/types";

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

const volumesBottle = [
  0.25, 0.33, 0.375, 0.4, 0.5, 0.68, 0.7, 0.74, 0.75, 1.0, 1.5, 3.0, 4.5, 6.0,
];

const volumesGlass = [40, 50, 75, 100, 125];

export const bottleVolumeOptions = volumesBottle.map((volume) => ({
  name: `${volume}мл`,
  id: volume,
}));

export const glassVolumeOptions = volumesGlass.map((volume) => ({
  name: `${volume}мл`,
  id: volume,
}));

const getLabelByValue = (options, value) => {
  const foundOption = options.find((option) => option.value === value);
  return foundOption ? foundOption.label : null; // Возвращает null, если значение не найдено
};

// Функции для получения label по value для каждого из массивов
export const getCategoryLabelByValue = (value: WineCategoryEnum) =>
  getLabelByValue(categoryOptions, value);
export const getColourLabelByValue = (value: WineColourEnum) =>
  getLabelByValue(colourOptions, value);
export const getSugarTypeLabelByValue = (value: SugarTypeEnum) =>
  getLabelByValue(sugarTypesOptions, value);

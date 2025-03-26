import { SugarTypeEnum, WineCategoryEnum, WineColourEnum } from "wlist-types";

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
  { label: "Ликеры", value: WineCategoryEnum.LIQUEUR },
  { label: "Аквавиты", value: WineCategoryEnum.AQUAVIT },
  { label: "Граппа", value: WineCategoryEnum.GRAPPA },
  { label: "Другие", value: WineCategoryEnum.OTHER },
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
  250, 330, 375, 400, 500, 680, 700, 740, 750, 1000, 1500, 3000, 4500, 6000,
];

const volumesGlass = [40, 50, 75, 100, 125, 150];

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

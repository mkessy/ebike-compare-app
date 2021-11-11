export interface Ebike {
  productId: number;
  imgSrc: string;

  modelBrand: {
    manufacturer: string;
    model: string;
  };
  generalInfo: {
    modelYear: number;

    priceRrp: number;
    category: string;
    eBikeType: string;
    weight: number;
    range: number;
  };

  engine: {
    engine: string;
    enginePosition: string;
    enginePower: number;
    assistsUntil: number;
    batteryType: string;
    batteryCharacteristics: {
      watts: number;
      amps: number;
      volts: number;
    };
    range: number;
  };
  gearsBrakes: {
    gearshiftType: string;
    gears: string;
    gearshiftBrand: string;
    brakesType: string;
    brakesModel: string;
  };

  suspension: {
    front: boolean;
    rear: boolean;
  };

  misc: {
    permissibleMaxWeight: string;
    lighting: string;
    rack: string;
    fenders: string;
  };
}
export type Comparer = (eBikePoint: number[], k: number) => Ebike[];

export type GlobalContextType = {
  bikes: Ebike[] | null;
  isLoading: boolean;
  comparer: null | ((eBikePoint: number[], k: number) => Ebike[]);
};

export const DEFAULT_VALUE = 999 as const;

export type SyntheticEbike = {
  price: number;
  power: number;
  category: number;
  enginePosition: number;
  range: number;
  weight: number;
};

const CATEGORY_NUMBER_MAP = {
  "fitness / racebike": 0,
  "folding / compact": 1,
  "trekking bike": 2,
  "city / urban": 3,
  "mountain bike / atb": 4,
  "cargo bike": 5,
  "lifestyle / cruiser": 6,
  special: 7,
  fatbike: 8,
};

const ENGINE_POSITION_NUMBER_MAP = {
  "mid-engine": 0,
  "front-hub": 1,
  "rear-hub": 2,
  "two-wheel": 3,
  "not-specified": 5,
  "front/rear-hub": 6,
};

export const COMPARISON_PATHS = [
  "generalInfo.priceRrp",
  "engine.enginePower",
  { "generalInfo.category": CATEGORY_NUMBER_MAP },
  { "engine.enginePosition": ENGINE_POSITION_NUMBER_MAP },
  "engine.range",
  "generalInfo.weight",
];

export const STRING_PATH_TO_NUMBER = {
  "generalInfo.category": CATEGORY_NUMBER_MAP,
  "engine.enginePosition": ENGINE_POSITION_NUMBER_MAP,
};

export const FIELD_TITLES: Array<{
  field: string;
  path: string;
  syntheticPath: string;
}> = [
  { field: "Price", path: "generalInfo.priceRrp", syntheticPath: "price" },
  { field: "Power", path: "engine.enginePower", syntheticPath: "power" },
  {
    field: "Category",
    path: "generalInfo.category",
    syntheticPath: "category",
  },
  {
    field: "Engine Position",
    path: "engine.enginePosition",
    syntheticPath: "enginePosition",
  },
  { field: "Range", path: "engine.range", syntheticPath: "range" },
  { field: "Weight", path: "generalInfo.weight", syntheticPath: "weight" },
];

export const SYNTHETIC_EBIKE_FIELDS: Array<{ field: string; path: string }> = [
  { field: "Price", path: "price" },
  { field: "Power", path: "enginePower" },
  { field: "Category", path: "category" },
  { field: "Engine Position", path: "enginePosition" },
  { field: "Range", path: "range" },
  { field: "Weight", path: "weight" },
];

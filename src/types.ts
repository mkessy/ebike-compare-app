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
export type Comparer = (bike: Ebike, k: number) => Ebike[];

export type GlobalContextType = {
  bikes: Ebike[];
  isLoading: boolean;
  comparer: any;
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

export const FIELD_TITLES: Record<string, string> = {
  priceRrp: "Price",
  enginePower: "Power",
  category: "Category",
  enginePosition: "Engine Position",
  range: "Range",
  weight: "Weight",
};

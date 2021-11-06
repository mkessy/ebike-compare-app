import createKDTree from "static-kdtree";
import { Ebike, COMPARISON_PATHS } from "../types";
import { get, isString } from "lodash";

const DEFAULT_VALUE = 999;

export const eBikePoint = (eBike: Ebike): (string | number)[] => {
  return COMPARISON_PATHS.map((path) => {
    if (isString(path)) return get(eBike, path, DEFAULT_VALUE);
    const [strPath, pathToNumberMap] = Object.entries(path)[0];
    pathToNumberMap as Record<string, number>;
    return pathToNumberMap[get(eBike, strPath, DEFAULT_VALUE)];
  });
};

const fetchBikeData = async (): Promise<Ebike[]> => {
  const bikes: Ebike[] = await (await fetch("bikes.json")).json();
  return bikes;
};

export const getEbikeComparer = async () => {
  const bikes = await fetchBikeData();

  const bikePoints = bikes.map(eBikePoint);
  console.log(bikePoints.slice(0, 10));
  console.log(bikes.slice(0, 10));
  const tree = createKDTree(bikePoints);
  return tree;
};

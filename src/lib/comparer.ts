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

export const getEbikeComparer = (bikes: Ebike[]) => {
  const bikePoints = bikes.map(eBikePoint);
  const tree = createKDTree(bikePoints);
  return function (bike: Ebike, k: number): Ebike[] {
    return tree.knn(eBikePoint(bike), k).map((index) => bikes[index]);
  };
};

import createKDTree from "static-kdtree";
import { Ebike, COMPARISON_PATHS, DEFAULT_VALUE } from "../types";
import { get, isString } from "lodash";

export const makeEbikePoint = (eBike: Ebike): number[] => {
  return COMPARISON_PATHS.map((path) => {
    if (isString(path)) return get(eBike, path, DEFAULT_VALUE);
    const [strPath, pathToNumberMap] = Object.entries(path)[0];
    pathToNumberMap as Record<string, number>;
    return pathToNumberMap[get(eBike, strPath, DEFAULT_VALUE)];
  });
};

export const getEbikeComparer = (bikes: Ebike[]) => {
  const bikePoints = bikes.map(makeEbikePoint);
  console.log("recreacting tree");
  const tree = createKDTree(bikePoints);
  return (eBikePoint: number[], k: number): Ebike[] => {
    return tree.knn(eBikePoint, k).map((index) => bikes[index]);
  };
};

import { Ebike } from "../types";

export const fetchBikeData = async (): Promise<Ebike[]> => {
  const bikes: Ebike[] = await (await fetch("bikes.json")).json();
  return bikes;
};

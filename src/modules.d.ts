declare module "static-kdtree" {
  export default function (points: (string | number)[][]): {
    knn(point: (string | number)[], k: number): (string | number)[];
    length: number;
    dimension: unknown;
  };
}

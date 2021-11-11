import { Grid } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { GlobalContext } from "../hooks/useGlobalContext";
import { Ebike, SyntheticEbike } from "../types";
import EbikeCard from "./EbikeCard";
import { makeEbikePoint } from "../lib/comparer";

type EbikeCardGroupProps = {
  bikeToCompare?: Ebike | null;
  syntheticEbike?: SyntheticEbike;
};

export const EbikeCardGroup = ({
  bikeToCompare,
  syntheticEbike,
}: EbikeCardGroupProps) => {
  //const [comparisons, setComparisons] = useState<Ebike[] | null>(null);
  const { comparer } = useContext(GlobalContext);
  const eBikePoint = bikeToCompare
    ? makeEbikePoint(bikeToCompare)
    : syntheticEbike
    ? Object.values(syntheticEbike)
    : null;

  const comparisons = useMemo(() => {
    return comparer && eBikePoint && comparer(eBikePoint, 10);
  }, [comparer, eBikePoint]);

  return (
    <Grid item container direction="row" spacing={2}>
      {comparisons &&
        comparisons.map((bike) => {
          return (
            <Grid item key={bike.productId}>
              {bikeToCompare ? (
                <EbikeCard bike={bike} bikeToCompare={bikeToCompare} />
              ) : (
                <EbikeCard bike={bike} syntheticEbike={syntheticEbike} />
              )}
            </Grid>
          );
        })}
    </Grid>
  );
};
type EbikeCompareContainerProps = {
  bikeToCompare?: Ebike | null;
  syntheticEbike?: SyntheticEbike;
};

export const EbikeCompareContainer: React.FunctionComponent<EbikeCompareContainerProps> =
  (props: EbikeCardGroupProps) => {
    return <EbikeCardGroup {...props} />;
  };

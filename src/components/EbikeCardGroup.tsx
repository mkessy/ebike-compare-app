import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../hooks/useGlobalContext";
import { Comparer, Ebike } from "../types";
import EbikeCard from "./EbikeCard";

type EbikeCardGroupProps = {
  bikeToCompare: Ebike | null;
};

export const EbikeCardGroup = ({ bikeToCompare }: EbikeCardGroupProps) => {
  const [comparisons, setComparisons] = useState<Ebike[] | null>(null);
  const comparer2 = useContext(GlobalContext).comparer;

  if (comparer2) console.log(comparer2(bikeToCompare!, 10));
  useEffect(() => {
    bikeToCompare && comparer2 && setComparisons(comparer2(bikeToCompare, 10));
  }, [comparer2, bikeToCompare]);

  return (
    <Grid item container direction="row" spacing={2}>
      {comparisons &&
        comparisons.map((bike) => {
          return (
            <Grid item>
              <EbikeCard bike={bike} />
            </Grid>
          );
        })}
    </Grid>
  );
};
type EbikeCompareContainerProps = {
  bikeToCompare: Ebike | null;
};

export const EbikeCompareContainer = ({
  bikeToCompare,
}: EbikeCompareContainerProps) => {
  const globalContext = useContext(GlobalContext);

  /* useEffect(() => {
    const comparer = getEbikeComparer(globalContext.bikes);
    if (bikeToCompare) setComparisons(comparer(bikeToCompare, 10));
  }, [globalContext, bikeToCompare]); */

  return <EbikeCardGroup bikeToCompare={bikeToCompare} />;
};

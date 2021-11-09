import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../hooks/useGlobalContext";
import { getEbikeComparer } from "../lib/comparer";
import { Ebike } from "../types";
import EbikeCard from "./EbikeCard";

type EbikeCardGroupProps = {
  bikes: Ebike[] | null;
};

export const EbikeCardGroup = ({ bikes }: EbikeCardGroupProps) => {
  return (
    <Grid item container direction="row" spacing={2}>
      <Grid item>{bikes && bikes.map((bike) => bike.modelBrand.model)}</Grid>
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
  const [comparisons, setComparisons] = useState<Ebike[] | null>(null);

  useEffect(() => {
    const comparer = getEbikeComparer(globalContext.bikes);
    if (bikeToCompare) setComparisons(comparer(bikeToCompare, 10));
  }, [globalContext, bikeToCompare]);

  return <EbikeCardGroup bikes={comparisons} />;
};

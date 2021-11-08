import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../hooks/useGlobalContext";
import { Ebike } from "../types";
import EbikeCard from "./EbikeCard";

type EbikeCardGroupProps = {
  bikes: Ebike[] | null;
};

export const EbikeCardGroup = ({ bikes }: EbikeCardGroupProps) => {
  return (
    <Grid item container direction="row" spacing={2}>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
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
    const comparer = globalContext.comparer;
    if (comparer && bikeToCompare) setComparisons(comparer(bikeToCompare, 10));
  }, [globalContext.comparer, bikeToCompare]);

  return <EbikeCardGroup bikes={comparisons} />;
};

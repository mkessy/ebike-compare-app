import { Grid } from "@mui/material";
import React, { useContext, useMemo } from "react";
import { GlobalContext } from "../hooks/useGlobalContext";
import { Ebike } from "../types";
import EbikeCard from "./EbikeCard";

type EbikeCardGroupProps = {
  bikeToCompare: Ebike | null;
};

export const EbikeCardGroup = ({ bikeToCompare }: EbikeCardGroupProps) => {
  //const [comparisons, setComparisons] = useState<Ebike[] | null>(null);
  const { comparer } = useContext(GlobalContext);

  const comparisons = useMemo(() => {
    return comparer && bikeToCompare && comparer(bikeToCompare, 10);
  }, [comparer, bikeToCompare]);

  return (
    <Grid item container direction="row" spacing={2}>
      {comparisons &&
        comparisons.map((bike) => {
          return (
            <Grid item key={bike.productId}>
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
  return <EbikeCardGroup bikeToCompare={bikeToCompare} />;
};

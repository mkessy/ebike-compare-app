import React, { useState } from "react";
import { EbikeForm } from "./EbikeForm";
import { EbikeCardGroup, EbikeCompareContainer } from "./EbikeCardGroup";
import { Header } from "./Header";
import { Container, Grid } from "@mui/material";
import SearchCompareTabs from "./SearchCompareTabs";
import { Ebike } from "../types";

export const HomePageGrid = () => {
  const [selectedTab, setSelectedTab] = useState<string>("search");
  const [selectedBike, setSelectedBike] = useState<Ebike | null>(null);

  return (
    <Container>
      <Header />
      <Grid container direction="row">
        <Grid item container direction="column" xs={4}>
          <SearchCompareTabs
            setSelectedTab={setSelectedTab}
            setSelectedBike={setSelectedBike}
            selectedTab={selectedTab}
          />
        </Grid>
        <Grid item container xs={8}>
          <EbikeCompareContainer bikeToCompare={selectedBike} />
        </Grid>
      </Grid>
    </Container>
  );
};

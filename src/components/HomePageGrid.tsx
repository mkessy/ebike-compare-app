import React, { useState } from "react";
import { EbikeForm } from "./EbikeForm";
import { Route, Routes } from "react-router-dom";
import { EbikeCompareContainer } from "./EbikeCardGroup";
import { Header } from "./Header";
import { Container, Grid } from "@mui/material";
import SearchCompareTabs from "./SearchCompareTabs";
import { DEFAULT_VALUE, Ebike, SyntheticEbike } from "../types";

export const HomePageGrid = () => {
  const [selectedTab, setSelectedTab] = useState<string>("search");
  const [selectedBike, setSelectedBike] = useState<Ebike | null>(null);
  const [syntheticEbike, setSyntheticEbike] = useState<SyntheticEbike>({
    price: DEFAULT_VALUE,
    power: DEFAULT_VALUE,
    category: DEFAULT_VALUE,
    enginePosition: DEFAULT_VALUE,
    range: DEFAULT_VALUE,
    weight: DEFAULT_VALUE,
  });

  return (
    <Container>
      <Header />
      <Grid container direction="row">
        <Grid item container direction="column" xs={4}>
          <SearchCompareTabs
            setSelectedTab={setSelectedTab}
            setSelectedBike={setSelectedBike}
            selectedTab={selectedTab}
            setSyntheticEbike={setSyntheticEbike}
            syntheticEbike={syntheticEbike}
          />
        </Grid>
        <Grid item container xs={8}>
          {selectedTab === "search" ? (
            <EbikeCompareContainer bikeToCompare={selectedBike} />
          ) : (
            <EbikeCompareContainer syntheticEbike={syntheticEbike} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

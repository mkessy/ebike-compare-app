import React from "react";
import { EbikeForm } from "./EbikeForm";
import { EbikeCardGroup, EbikeCompareContainer } from "./EbikeCardGroup";
import { Header } from "./Header";
import { Container, Grid } from "@mui/material";
import SearchCompareTabs from "./SearchCompareTabs";

export const HomePageGrid = () => {
  return (
    <Container>
      <Header />
      <Grid container direction="row">
        <Grid item container direction="column" xs={4}>
          <SearchCompareTabs />
        </Grid>
        <Grid item container xs={8}>
          <EbikeCompareContainer />
        </Grid>
      </Grid>
    </Container>
  );
};

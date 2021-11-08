import React from "react";
import { EbikeForm } from "./EbikeForm";
import { EbikeCardGroup } from "./EbikeCardGroup";
import { Header } from "./Header";
import { Container, Grid } from "@mui/material";
import SearchCompareTabs from "./SearchCompareTabs";

export const HomePageGrid = () => {
  return (
    <Container maxWidth={"lg"}>
      <Header />
      <Grid container direction="row" columnSpacing={10}>
        <Grid item container direction="row" xs={2}>
          <SearchCompareTabs />
        </Grid>
        <Grid item container xs={10}>
          <EbikeCardGroup />
        </Grid>
      </Grid>
    </Container>
  );
};

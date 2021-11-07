import React from "react";
import { EbikeForm } from "./EbikeForm";
import { EbikeCardGroup } from "./EbikeCardGroup";
import { Header } from "./Header";
import { Container, Grid } from "@mui/material";

export const HomePageGrid = () => {
  return (
    <Container maxWidth={"lg"}>
      <Header />
      <Grid container direction="row" columnSpacing={5}>
        <Grid item container direction="row" xs={2}>
          <EbikeForm />
        </Grid>
        <Grid item container xs={10}>
          <EbikeCardGroup />
        </Grid>
      </Grid>
    </Container>
  );
};

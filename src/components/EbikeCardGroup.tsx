import { Grid } from "@mui/material";
import React from "react";
import EbikeCard from "./EbikeCard";

export const EbikeCardGroup = () => {
  return (
    <Grid item container direction="row" spacing={2}>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
      <Grid item>
        <EbikeCard></EbikeCard>
      </Grid>
    </Grid>
  );
};

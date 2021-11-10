import { TextField, Box, MenuItem, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import { SyntheticEbike, DEFAULT_VALUE } from "../types";

const categories = [
  { label: "fitness / racebike", value: 0 },
  { label: "folding / compact", value: 1 },
  { label: "trekking bike", value: 2 },
  { label: "city / urban", value: 3 },
  { label: "mountain bike / atb", value: 4 },
  { label: "cargo bike", value: 5 },
  { label: "lifestyle / cruiser", value: 6 },
  { label: "special", value: 7 },
  { label: "fatbike", value: 8 },
];

const enginePositions = [
  { label: "mid-engine", value: 0 },
  { label: "front-hub", value: 1 },
  { label: "rear-hub", value: 2 },
  { label: "two-wheel", value: 3 },
  { label: "not-specified", value: 5 },
  { label: "front/rear-hub", value: 6 },
];

const priceMarks = [
  {
    value: 250,
    label: "250",
  },
  {
    value: 15000,
    label: "15,000",
  },
];
const powerMarks = [
  {
    value: 25,
    label: "250",
  },
  {
    value: 10000,
    label: "10,000",
  },
];
const rangeMarks = [
  {
    value: 20,
    label: "20",
  },
  {
    value: 150,
    label: "150",
  },
];
const weightMarks = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 250,
    label: "250",
  },
];

type EbikeFormProps = {
  setSyntheticEbike: (syntheticBike: SyntheticEbike) => void;
  syntheticEbike: SyntheticEbike;
};

export const EbikeForm = ({
  setSyntheticEbike,
  syntheticEbike,
}: EbikeFormProps) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSyntheticEbike({
      ...syntheticEbike,
      [event.target.name]: event.target.value,
    });
  };

  /* const handleSliderChange = (event: Event, value: number | number[], _: number) => {
    return setSyntheticEbike({
      ...syntheticEbike,
      [event.target.value]: parseInt(event.target.value),
    });
  }; */

  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
      <Typography gutterBottom>Price ($)</Typography>
      <Slider
        id="price"
        aria-label="Price"
        valueLabelDisplay="auto"
        min={250}
        max={15000}
        marks={priceMarks}
        onChange={(_, value) => {
          setSyntheticEbike({
            ...syntheticEbike,
            price: value as number,
          });
        }}
      />
      <Typography gutterBottom>Power (Watts)</Typography>

      <Slider
        id="power"
        aria-label="Power"
        valueLabelDisplay="auto"
        marks={powerMarks}
        min={25}
        max={10000}
        onChange={(_, value) => {
          setSyntheticEbike({
            ...syntheticEbike,
            power: value as number,
          });
        }}
      />
      <Typography gutterBottom>Range (mi)</Typography>
      <Slider
        id="range"
        aria-label="Range"
        marks={rangeMarks}
        valueLabelDisplay="auto"
        min={20}
        max={150}
        onChange={(_, value) => {
          setSyntheticEbike({
            ...syntheticEbike,
            range: value as number,
          });
        }}
      />
      <Typography gutterBottom>Weight (lbs)</Typography>

      <Slider
        id="weight"
        aria-label="Weight"
        marks={weightMarks}
        valueLabelDisplay="auto"
        min={10}
        max={250}
        onChange={(_, value) => {
          setSyntheticEbike({
            ...syntheticEbike,
            weight: value as number,
          });
        }}
      />
      <TextField
        select
        fullWidth
        name="category"
        label="Category"
        variant="standard"
        onChange={handleSelectChange}
      >
        {categories.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </TextField>
      <TextField
        fullWidth
        select
        name="enginePosition"
        label="Engine Position"
        variant="standard"
        onChange={handleSelectChange}
      >
        {enginePositions.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </TextField>
    </Box>
  );
};

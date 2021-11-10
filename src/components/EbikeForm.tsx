import { TextField, Box, MenuItem } from "@mui/material";
import React from "react";

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

export const EbikeForm = () => {
  return (
    <Box component="form" sx={{ display: "flex", flexDirection: "column" }}>
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        fullWidth
        id="price"
        label="Price"
        variant="standard"
      />
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        fullWidth
        id="power"
        label="Power"
        variant="standard"
      />
      <TextField
        select
        fullWidth
        id="category"
        label="Category"
        variant="standard"
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
        id="enginePosition"
        label="Engine Position"
        variant="standard"
      >
        {enginePositions.map((option) => {
          return (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </TextField>
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        fullWidth
        id="range"
        label="Range"
        variant="standard"
      />
      <TextField
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        fullWidth
        id="weight"
        label="Weight"
        variant="standard"
      />
    </Box>
  );
};

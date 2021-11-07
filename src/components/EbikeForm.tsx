import { TextField, Box } from "@mui/material";
import React from "react";

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
      />
      <TextField
        fullWidth
        select
        id="enginePosition"
        label="Engine Position"
        variant="standard"
      />
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

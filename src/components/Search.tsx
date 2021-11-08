import React, { useState, useMemo, useCallback } from "react";
import { TextField, Box } from "@mui/material";

const Search: React.FunctionComponent = () => {
  const [search, setSearch] = useState("");

  return (
    <Box>
      <TextField onChange={() => {}} />
    </Box>
  );
};

export default Search;

import React, { useState, useMemo, useContext, useCallback } from "react";
import { GlobalContext } from "../hooks/useGlobalContext";
import {
  TextField,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { Ebike } from "../types";

type SearchProps = {
  setSelectedBike: (bike: Ebike | null) => void;
};

export const Search = ({ setSelectedBike }: SearchProps) => {
  const [search, setSearch] = useState("");
  const [selectedIdx, setSelectedIdx] = useState<null | number>(null);
  const bikes = useContext(GlobalContext).bikes;

  const searchResults = useMemo(() => {
    return bikes
      .filter((bike) => {
        const {
          modelBrand: { manufacturer, model },
        } = bike;
        return (
          manufacturer.toLowerCase().includes(search.toLowerCase()) ||
          model.toLowerCase().includes(search.toLowerCase())
        );
      })
      .slice(0, 10);
  }, [bikes, search]);

  const handleClickSearchItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedBike(searchResults[index]);
    setSelectedIdx(index);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setSelectedIdx(null);
    setSelectedBike(null);
  };

  return (
    <Box>
      <TextField variant="filled" fullWidth onChange={handleSearch} />
      <List dense={true}>
        {searchResults.map((bike, index) => {
          return (
            <ListItemButton
              onClick={(event) => handleClickSearchItem(event, index)}
              selected={index === selectedIdx}
            >
              <ListItemText
                primary={bike.modelBrand.model}
                secondary={bike.modelBrand.manufacturer}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

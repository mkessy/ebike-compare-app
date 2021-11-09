import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Ebike, FIELD_TITLES } from "../types";
import { get } from "lodash";

import React from "react";
type EbikeCardProps = {
  bike: Ebike;
};
const EbikeCard = ({ bike }: EbikeCardProps) => {
  return (
    <Card sx={{ width: "200px" }}>
      <CardMedia
        sx={{ height: "125px", width: "100%" }}
        component="img"
        alt={bike.modelBrand.model}
        image={`https://greenfinder.de/${bike.imgSrc}`}
      />
      <CardContent>
        <Typography noWrap textOverflow="ellipsis" variant="h6">
          {bike.modelBrand.model}
        </Typography>
        <Typography
          noWrap
          textOverflow="ellipsis"
          variant="subtitle1"
          color="text.secondary"
        >
          {bike.modelBrand.manufacturer}
        </Typography>
        <List dense>
          {FIELD_TITLES.map((field) => {
            return (
              <ListItem dense disablePadding alignItems="flex-start">
                <ListItemText secondary={field.field}></ListItemText>
                <ListItemText primary={get(bike, field.path)}></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default EbikeCard;

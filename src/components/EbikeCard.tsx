import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Ebike } from "../types";

import React from "react";
type EbikeCardProps = {
  bike: Ebike;
};
const EbikeCard = ({ bike }: EbikeCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://greenfinder.de/${bike.imgSrc}`}
      />
      <CardContent>
        <Typography variant="h5">{bike.modelBrand.model}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {bike.modelBrand.manufacturer}
        </Typography>
        <List dense></List>
      </CardContent>
    </Card>
  );
};

export default EbikeCard;

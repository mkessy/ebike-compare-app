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
import { SystemStyleObject } from "@mui/system";
type EbikeCardProps = {
  bike: Ebike;
  bikeToCompare: Ebike;
};

const listItemStyle: SystemStyleObject = {
  textAlign: "left",
  flexGrow: 0,
};

const listItemStyle2: SystemStyleObject = {
  textAlign: "right",
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "50px",
};

const EbikeCard = ({ bike, bikeToCompare }: EbikeCardProps) => {
  return (
    <Card sx={{ width: "200px" }}>
      <CardMedia
        sx={{ height: "125px", width: "100%", objectFit: "contain" }}
        component="img"
        alt={bike.modelBrand.model}
        image={`https://greenfinder.de/${bike.imgSrc}`}
      />
      <CardContent>
        <Typography noWrap textOverflow="ellipsis" variant="subtitle1">
          {bike.modelBrand.model}
        </Typography>
        <Typography
          noWrap
          textOverflow="ellipsis"
          variant="subtitle2"
          color="text.secondary"
        >
          {bike.modelBrand.manufacturer}
        </Typography>
        <List dense>
          {FIELD_TITLES.filter(
            (f) => f.field !== "Category" && f.field !== "Engine Position"
          ).map((field) => {
            return (
              <ListItem dense disablePadding alignItems="flex-start">
                <ListItemText secondary={field.field}></ListItemText>
                <ListItemText
                  sx={listItemStyle}
                  primary={get(bike, field.path)}
                ></ListItemText>
                <ListItemText
                  sx={listItemStyle2}
                  primary={
                    get(bikeToCompare, field.path) - get(bike, field.path)
                  }
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};

export default EbikeCard;

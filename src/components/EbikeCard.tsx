import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";

const testBike = {
  productId: 982,
  imgSrc:
    "/typo3temp/_processed_/csm_7fb17e3820c9f0ff58d09682a5b763d9_59d0908a08.jpg",
  modelBrand: {
    manufacturer: "Easy Motion",
    model: "Carbon Herren 28",
  },
  generalInfo: {
    modelYear: 2012,
    priceRrp: 3301,
    category: "fitness / racebike",
    eBikeType: "pedelec",
    frameType: "male",
    frameSize: "50",
    weight: 35,
    range: "62 miles *",
  },
  engine: {
    engine: "panasonic",
    enginePosition: "mid-engine",
    enginePower: 250,
    assistsUntil: 20,
    batteryType: "Lithium-Ionen Akku",
    batteryCharacteristics: { watts: 288, amps: 8, volts: 36 },
    batteryPosition: "seat-tube",
    range: 62,
  },
  gearsBrakes: {
    gearshiftType: "derailleur",
    gears: "10",
    gearshiftBrand: "Shimano 105",
    brakesType: "V-Brake",
    brakesModel: "Shimano V-Brake",
  },
  suspension: { front: false, rear: false },
  misc: {
    permissibleMaxWeight: "-",
    lighting: "No",
    rack: "No",
    fenders: "No",
  },
};

const EbikeCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`https://greenfinder.de/${testBike.imgSrc}`}
      />
      <CardContent>
        <Typography variant="h5">{testBike.modelBrand.model}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {testBike.modelBrand.manufacturer}
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText>Model Year </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Price </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Power </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Category </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Engine Position </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Range </ListItemText>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default EbikeCard;

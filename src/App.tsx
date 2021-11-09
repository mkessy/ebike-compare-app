import "./App.css";
import { getEbikeComparer } from "./lib/comparer";
import { HomePageGrid } from "./components/HomePageGrid";
import GlobalContext from "./hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { Ebike, Comparer } from "./types";
import { fetchBikeData } from "./lib/fetchBikeData";

const someBikes = [
  {
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
  },
  {
    productId: 984,
    imgSrc:
      "/typo3temp/_processed_/csm_0a4bc9706feb2046bf634822b4014634_9299d32a83.jpg",
    modelBrand: { manufacturer: "Easy Motion", model: "Smart" },
    generalInfo: {
      modelYear: 2012,
      priceRrp: null,
      category: "folding / compact",
      eBikeType: "pedelec",
      frameType: "unisex",
      frameSize: "31",
      weight: 45,
      range: "37 miles *",
    },
    engine: {
      enginePosition: "front-hub",
      enginePower: 250,
      assistsUntil: 20,
      batteryType: "Lithium-Ionen Akku",
      batteryCharacteristics: { watts: 216, amps: 6, volts: 36 },
      batteryPosition: "porter-rear",
      range: 37,
      engine: null,
    },
    gearsBrakes: {
      gearshiftType: "hub",
      gears: "6",
      gearshiftBrand: "Shimano TS31",
      brakesType: "V-Brake",
      brakesModel: "V-Brake",
    },
    suspension: { front: false, rear: false },
    misc: {
      permissibleMaxWeight: "-",
      lighting: "Yes",
      rack: "Yes",
      fenders: "Yes",
    },
  },
  {
    productId: 989,
    imgSrc:
      "/typo3temp/_processed_/csm_ae8f927161d88aa6d87d1f7f0110ccdd_1e013fe154.jpg",
    modelBrand: { manufacturer: "Easy Motion", model: "Urban 700 Wave" },
    generalInfo: {
      modelYear: 2012,
      priceRrp: 2420,
      category: "trekking bike",
      eBikeType: "pedelec",
      frameType: "low step",
      frameSize: "42,48",
      weight: 49,
      range: "50 miles *",
    },
    engine: {
      enginePosition: "front-hub",
      enginePower: 250,
      assistsUntil: 20,
      batteryType: "Lithium-Ionen Akku",
      batteryCharacteristics: { watts: 288, amps: 8, volts: 36 },
      batteryPosition: "porter-rear",
      range: 50,
      engine: null,
    },
    gearsBrakes: {
      gearshiftType: "hub",
      gears: "8",
      gearshiftBrand: "Shimano Acera",
      brakesType: "V-Brake",
    },
    suspension: { front: true, rear: false },
    misc: {
      permissibleMaxWeight: "-",
      lighting: "Yes",
      rack: "Yes",
      fenders: "Yes",
    },
  },
  {
    productId: 983,
    imgSrc:
      "/typo3temp/_processed_/csm_5ee4174275e002f9677d86c664c316bf_e18d5a143f.jpg",
    modelBrand: { manufacturer: "Easy Motion", model: "Volt" },
    generalInfo: {
      modelYear: 2012,
      priceRrp: 2200,
      category: "folding / compact",
      eBikeType: "pedelec",
      frameType: "unisex",
      frameSize: "31",
      weight: 47,
      range: "50 miles *",
    },
    engine: {
      engine: "panasonic",
      enginePosition: "front-hub",
      enginePower: 250,
      assistsUntil: 20,
      batteryType: "Lithium-Ionen Akku",
      batteryCharacteristics: { watts: 208, amps: 8, volts: 26 },
      batteryPosition: "seat-tube",
      range: 50,
    },
    gearsBrakes: {
      gearshiftType: "hub",
      gears: "8",
      gearshiftBrand: "Shimano Nexus",
      brakesType: "V-Brake",
      brakesModel: "Tektro E-Comp. 160 mm",
    },
    suspension: { front: false, rear: false },
    misc: {
      permissibleMaxWeight: "-",
      lighting: "Yes",
      rack: "Yes",
      fenders: "Yes",
    },
  },
];
const compareFunc = getEbikeComparer(someBikes as unknown as Ebike[]);

function App() {
  const [bikes, setBikes] = useState<Ebike[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchBikeData().then((data) => {
      setBikes(data);
      setLoading(false);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ bikes, isLoading }}>
      <HomePageGrid />
    </GlobalContext.Provider>
  );
}

export default App;

import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import { EbikeForm } from "./EbikeForm";
import { Search } from "./Search";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";
import { Ebike, SyntheticEbike } from "../types";

type SearchCompareProps = {
  setSelectedTab: (selectedTab: string) => void;
  setSelectedBike: (selectedBike: Ebike | null) => void;
  setSyntheticEbike: (syntheticBike: SyntheticEbike) => void;
  selectedTab: string;
  syntheticEbike: SyntheticEbike;
};

const SearchCompareTabs = ({
  setSelectedTab,
  setSelectedBike,
  selectedTab,
  setSyntheticEbike,
  syntheticEbike,
}: SearchCompareProps) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  return (
    <TabContext value={selectedTab}>
      <TabList
        centered
        aria-label="Search and Compare tabs"
        onChange={handleChange}
      >
        <Tab label="Search" value="search" />
        <Tab label="Compare" value="compare" />
      </TabList>

      <TabPanel value="search">
        <Search setSelectedBike={setSelectedBike} />
      </TabPanel>
      <TabPanel value="compare">
        <EbikeForm
          setSyntheticEbike={setSyntheticEbike}
          syntheticEbike={syntheticEbike}
        />
      </TabPanel>
    </TabContext>
  );
};

export default SearchCompareTabs;

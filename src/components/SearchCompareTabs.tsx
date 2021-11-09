import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import { EbikeForm } from "./EbikeForm";
import { Search } from "./Search";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";
import { Ebike } from "../types";

type SearchCompareProps = {
  setSelectedTab: (selectedTab: string) => void;
  setSelectedBike: (selectedBike: Ebike | null) => void;
  selectedTab: string;
};

const SearchCompareTabs = ({
  setSelectedTab,
  setSelectedBike,
  selectedTab,
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
        <EbikeForm />
      </TabPanel>
    </TabContext>
  );
};

export default SearchCompareTabs;

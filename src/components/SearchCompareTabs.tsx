import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import { EbikeForm } from "./EbikeForm";
import { Search } from "./Search";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";

const SearchCompareTabs = () => {
  const [value, setValue] = React.useState("search");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <TabList
        centered
        aria-label="Search and Compare tabs"
        onChange={handleChange}
      >
        <Tab label="Search" value="search" />
        <Tab label="Compare" value="compare" />
      </TabList>

      <TabPanel value="search">
        <Search />
      </TabPanel>
      <TabPanel value="compare">
        <EbikeForm />
      </TabPanel>
    </TabContext>
  );
};

export default SearchCompareTabs;

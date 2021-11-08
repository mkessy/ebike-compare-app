import { Tab } from "@mui/material";
import { Box } from "@mui/system";

import { TabContext, TabList, TabPanel } from "@mui/lab";
import React from "react";

const SearchCompareTabs = () => {
  const [value, setValue] = React.useState("search");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box>
          <TabList aria-label="Search and Compare tabs" onChange={handleChange}>
            <Tab label="Search" value="search" />
            <Tab label="Compare" value="compare" />
          </TabList>
        </Box>
        <TabPanel value="search">Search</TabPanel>
        <TabPanel value="compare">Compare</TabPanel>
      </TabContext>
    </Box>
  );
};

export default SearchCompareTabs;

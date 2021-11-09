import { createContext, useContext, useState } from "react";
import { GlobalContextType } from "../types";

export const GlobalContext = createContext<GlobalContextType>({
  bikes: [],
  isLoading: true,
  comparer: null,
});
GlobalContext.displayName = "E-bike Context: list of all e-bikes";
//export const useGlobalContext = () => useContext(GlobalContext);

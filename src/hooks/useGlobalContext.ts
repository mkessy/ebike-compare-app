import { createContext, useContext } from "react";
import { GlobalContextType } from "../types";

const GlobalContext = createContext<GlobalContextType>({ bikes: [] });
GlobalContext.displayName = "E-bike Context: list of all e-bikes";

export const useGlobalContext = () => useContext(GlobalContext);

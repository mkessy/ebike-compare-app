import { createContext, useContext } from "react";
import { GlobalContextType } from "../types";

const GlobalContext = createContext<GlobalContextType>({
  bikes: [],
  isLoading: true,
});
GlobalContext.displayName = "E-bike Context: list of all e-bikes";
export default GlobalContext;
//export const useGlobalContext = () => useContext(GlobalContext);

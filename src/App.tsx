import "./App.css";
import { getEbikeComparer } from "./lib/comparer";
import { HomePageGrid } from "./components/HomePageGrid";
import GlobalContext from "./hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { Ebike } from "./types";
import { fetchBikeData } from "./lib/fetchBikeData";

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

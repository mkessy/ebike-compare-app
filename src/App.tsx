import "./App.css";
import { getEbikeComparer } from "./lib/comparer";
import { HomePageGrid } from "./components/HomePageGrid";
import { GlobalContext } from "./hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { Ebike } from "./types";
import { fetchBikeData } from "./lib/fetchBikeData";

function App() {
  const [bikes, setBikes] = useState<Ebike[] | null>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const comparer = bikes && getEbikeComparer(bikes);

  console.log(comparer);

  useEffect(() => {
    fetchBikeData().then((data) => {
      setBikes(data);
      setLoading(false);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ bikes, isLoading, comparer }}>
      <HomePageGrid />
    </GlobalContext.Provider>
  );
}

export default App;

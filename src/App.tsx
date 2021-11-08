import "./App.css";
import { getEbikeComparer } from "./lib/comparer";
import { HomePageGrid } from "./components/HomePageGrid";
import GlobalContext from "./hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { Ebike, Comparer } from "./types";
import { fetchBikeData } from "./lib/fetchBikeData";

function App() {
  const [bikes, setBikes] = useState<Ebike[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const [comparer, setComparer] = useState<Comparer | null>(null);

  useEffect(() => {
    fetchBikeData().then((data) => {
      setBikes(data);
      setLoading(false);
      setComparer(getEbikeComparer(data));
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ bikes, isLoading, comparer }}>
      <HomePageGrid />
    </GlobalContext.Provider>
  );
}

export default App;

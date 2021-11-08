import "./App.css";
import { getEbikeComparer } from "./lib/comparer";
import { HomePageGrid } from "./components/HomePageGrid";
import useGlobalContext from "./hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { Ebike } from "./types";
import { fetchBikeData } from "./lib/fetchBikeData";

getEbikeComparer().then((tree) => {
  const comparisons = tree.knn([2900, 250, 2, 999, 62, 35], 10);
  console.log(comparisons);
});
function App() {
  const [bikes, setBikes] = useState<Ebike[]>([]);
  const [loading setLoading] = useState<boolean>(true);

  useEffect( () => {

    fetchBikeData().then((data) => null)

  }, []);

  return (
    <>
      <HomePageGrid />
    </>
  );
}

export default App;

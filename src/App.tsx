import "./App.css";
import { getEbikeComparer } from "./lib/bikeComparer";

getEbikeComparer().then((tree) => {
  const comparisons = tree.knn([2900, 250, 2, 999, 62, 35], 10);
  console.log(comparisons);
});
function App() {
  return <></>;
}

export default App;

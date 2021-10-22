import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Cooking() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Cooking</h2>
        <FilterDisplay category="cooking" data_array={data_array} />
      </div>
    </div>
  );
}
export default Cooking;

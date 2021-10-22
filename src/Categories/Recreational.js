import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Recreational() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Recreational</h2>
        <FilterDisplay category="recreational" data_array={data_array} />
      </div>
    </div>
  );
}

export default Recreational;

import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Relaxation() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Relaxation</h2>
        <FilterDisplay category="relaxation" data_array={data_array} />
      </div>
    </div>
  );
}

export default Relaxation;

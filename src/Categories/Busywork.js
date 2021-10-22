import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Busywork() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Busy Work</h2>
        <FilterDisplay category="busywork" data_array={data_array} />
      </div>
    </div>
  );
}

export default Busywork;

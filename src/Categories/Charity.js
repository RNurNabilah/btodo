import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Charity() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Charity</h2>
        <FilterDisplay category="charity" data_array={data_array} />
      </div>
    </div>
  );
}

export default Charity;

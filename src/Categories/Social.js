import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Social() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Social</h2>
        <FilterDisplay category="social" data_array={data_array} />
      </div>
    </div>
  );
}

export default Social;

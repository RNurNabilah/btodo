import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Diy() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: DIY</h2>
        <FilterDisplay category="diy" data_array={data_array} />
      </div>
    </div>
  );
}

export default Diy;

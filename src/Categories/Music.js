import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Music() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Music</h2>
        <FilterDisplay category="music" data_array={data_array} />
      </div>
    </div>
  );
}

export default Music;

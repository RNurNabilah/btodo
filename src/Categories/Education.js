import data_array from "../obj.js";
import "./Cat.css";
import "../App.css";
import FilterDisplay from "./Filter.js";

function Education() {
  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Education</h2>
        <FilterDisplay category="education" data_array={data_array} />
      </div>
    </div>
  );
}

export default Education;

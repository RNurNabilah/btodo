import data_array from "../obj.js";
import "./Cat.css";

function Social() {
  var filtered = data_array.filter((data) => data.type === "social");

  const mappingFil = (
    <div className="category">
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <div className="card">
              <h2>{list.activity}</h2>
              <p>No. of participants: {list.participants}</p>
              <p>Type: {list.type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Social</h2>
        {mappingFil}
      </div>
    </div>
  );
}

export default Social;

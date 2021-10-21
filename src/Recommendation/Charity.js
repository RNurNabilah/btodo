import data_array from "../obj.js";

function Charity() {
  var filtered = data_array.filter((data) => data.type === "charity");

  const mappingFil = (
    <div className="category">
      {filtered.map((list) => {
        return (
          <div id="card" key={list.id}>
            <p>Activity: {list.activity}</p>
            <p>No. of participants: {list.participants}</p>
            <p>Type: {list.type}</p>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="App">
      <div id="bored-container">
        <h2>Category: Charity</h2>
        {mappingFil}
      </div>
    </div>
  );
}

export default Charity;

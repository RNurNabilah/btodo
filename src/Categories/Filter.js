import { useState, useEffect } from "react";
import "../App.css";

const FilterDisplay = ({ category, data_array }) => {
  const initial_data = data_array.filter((d) => d.type === category);
  const [filtered_data, setFilteredData] = useState(initial_data);
  const [filter_type, setFilterType] = useState("");

  useEffect(() => {
    if (filter_type === "All") {
      setFilteredData(initial_data);
    } else if (filter_type === "Solo") {
      setFilteredData(initial_data.filter((data) => data.participants === 1));
    } else if (filter_type === "Group") {
      setFilteredData(initial_data.filter((data) => data.participants > 1));
    } else if (filter_type === "Free") {
      setFilteredData(initial_data.filter((data) => data.price === 0.0));
    } else if (filter_type === "Priced") {
      setFilteredData(initial_data.filter((data) => data.price > 0.0));
    }
  // eslint-disable-next-line
  }, [filter_type]);

  const handleFilterSelect = (e) => {
    setFilterType(e.target.value);
  };
  let cost = "";

  return (
    <div className="page-container">
      <div className="dropdown">
        <strong className="dropbtn">Filter by:</strong>
        <select onChange={handleFilterSelect}>
          <option value="All">All</option>
          <option value="Solo">Solo</option>
          <option value="Group">Group</option>
          <option value="Free">Free</option>
          <option value="Priced">Priced</option>
        </select>
      </div>
      <div className="card-container">
        {filtered_data.map((list) => {
          if (list.price > 0.0) {
            cost = "$$";
          } else {
            cost = "Free";
          }
          return (
            <div className="card">
              <p>Activity: {list.activity}</p>
              <p>No. of participants: {list.participants}</p>
              <p>Type: {list.type}</p>
              <p>Price: {cost}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterDisplay;

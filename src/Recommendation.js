import React from "react";
import Images from "./Images/Image";
import data_array from "./obj.js";
import Shuffle from "./Shuffle.js";
import "./App.css";

export default function Recommendation() {
  let cost = "";
  //fetch recommended activitiesy//
  var filter = data_array.filter(
    (data) =>
      data.price === 0.0 && data.accessibility === "Few to no challenges"
  );

  //randomize recommended
  var recommends = Shuffle(filter);

  const mappingRecs = (
    <div>
      {recommends.slice(0, 5).map((list) => {
        if (list.price > 0.0) {
          cost = "$$";
        } else {
          cost = "Free";
        }
        return (
          <div class="scale" id="box-button">
            <img src={Images.recommend} className="Logo" alt="" />
            <br />
            <p>{list.activity}</p>
            <div class="info">
              <h2>Details</h2>
              <ul>
                <li>
                  <strong>Activity : </strong>
                  {list.activity}
                </li>
                <li>
                  <strong>No. of Participants : </strong>
                  {list.participants}
                </li>
                <li>
                  <strong>Type: </strong>
                  {list.type}
                </li>
                <li>
                  <strong>Cost: </strong>
                  {cost}
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div id="bored-container">
      <h1 className="animate">Recommended</h1>
      <div id="box-container">{mappingRecs}</div>
    </div>
  );
}

import React from "react";
import Carousel from "react-elastic-carousel";
import { BrowserRouter as Route, BrowserRouter } from "react-router-dom";
import Images from "./Images/Image";
import "./App.css";
import "./Categories/Cat.css";
import { useHistory } from "react-router-dom";
import Recreation from "./Categories/Recreational";
import Education from "./Categories/Education";
import Cooking from "./Categories/Cooking";
import Charity from "./Categories/Charity";
import Diy from "./Categories/Diy";
import Social from "./Categories/Social";
import Relaxation from "./Categories/Relaxation";
import Music from "./Categories/Music";
import Busywork from "./Categories/Busywork";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Categories() {
  const history = useHistory();
  return (
    <BrowserRouter>
      {/* Define route path */}
      <Route path="/recreation" component={Recreation} />
      <Route path="/education" component={Education} />
      <Route path="/cooking" component={Cooking} />
      <Route path="/charity" component={Charity} />
      <Route path="/diy" component={Diy} />
      <Route path="/social" component={Social} />
      <Route path="/relax" component={Relaxation} />
      <Route path="/music" component={Music} />
      <Route path="/busywork" component={Busywork} />

      <h1 style={{ textAlign: "center" }}>Categories</h1>
      <div className="Slider">
        <Carousel breakPoints={breakPoints}>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/recreation")}
          >
            <img src={Images.recreation} className="Logo" alt="" />
            <p>Recreational</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/education")}
          >
            <img src={Images.education} className="Logo" alt="" />
            <p>Education</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/cooking")}
          >
            <img src={Images.cooking} className="Logo" alt="" />
            <p>Cooking</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/charity")}
          >
            <img src={Images.charity} className="Logo" alt="" />
            <p>Charity</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/diy")}
          >
            <img src={Images.diy} className="Logo" alt="" />
            <p>DIY</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/social")}
          >
            <img src={Images.social} className="Logo" alt="" />
            <p>Social</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/music")}
          >
            <img src={Images.music} className="Logo" alt="" />
            <p>Music</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/busywork")}
          >
            <img src={Images.work} className="Logo" alt="" />
            <p>Busy Work</p>
          </button>
          <button
            class="scale"
            id="box-button"
            onClick={() => history.push("/relax")}
          >
            <img src={Images.relax} className="Logo" alt="" />
            <p>Relaxation</p>
          </button>
        </Carousel>
      </div>
    </BrowserRouter>
  );
}

export default Categories;

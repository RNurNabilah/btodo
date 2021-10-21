import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Weather from "./component/weather.js";
import Categories from "./Categories";
import Recommendation from "./Recommendation";
import Recreation from "./Recommendation/Recreational";
import Education from "./Recommendation/Education";
import Cooking from "./Recommendation/Cooking";
import Charity from "./Recommendation/Charity";
import Diy from "./Recommendation/Diy";
import Social from "./Recommendation/Social";
import Relaxation from "./Recommendation/Relaxation";
import Music from "./Recommendation/Music";
import Busywork from "./Recommendation/Busywork";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <p className="Title"> BTodo App </p>
        </Link>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/recreation" component={Recreation} />
          <Route path="/education" component={Education} />
          <Route path="/cooking" component={Cooking} />
          <Route path="/charity" component={Charity} />
          <Route path="/diy" component={Diy} />
          <Route path="/social" component={Social} />
          <Route path="/relax" component={Relaxation} />
          <Route path="/music" component={Music} />
          <Route path="/busywork" component={Busywork} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <div className="Weather-col">
      <div>Hey There, Let's discover</div>
      <div className="Weather">
        {" "}
        <Weather />
      </div>
    </div>
    <div className="Categories">
      <Categories />
    </div>
    <div className="Recommendation">
      <Recommendation />
    </div>
  </div>
);
export default App;

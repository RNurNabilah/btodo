import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "./Categories/Cat.css";
import Weather from "./component/weather.js";
import Categories from "./Categories";
import Recommendation from "./Recommendation";
import Recreation from "./Categories/Recreational";
import Education from "./Categories/Education";
import Cooking from "./Categories/Cooking";
import Charity from "./Categories/Charity";
import Diy from "./Categories/Diy";
import Social from "./Categories/Social";
import Relaxation from "./Categories/Relaxation";
import Music from "./Categories/Music";
import Busywork from "./Categories/Busywork";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/" style={{ textDecoration: "none" }}>
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
  <div className="Main-container">
    <div className="Weather-col">
      <div className="Main-header">
        <strong>
          Hey There! <br /> Let's discover
        </strong>
      </div>
      <div className="Weather">
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

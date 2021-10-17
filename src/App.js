import './App.sass';
import {Switch, Route} from "react-router-dom";
import {withRouter} from "react-router";
import Filmpage from './components/pages/film-page';
import Filmdetailspage from './components/pages/film-details-page';
import Vehiclepage from './components/pages/vehicle-page';
import Characterpage from './components/pages/character-page';
import Planetpage from './components/pages/planet-page';

function App() {
  return (
    <div className="App">
      <Switch>
				<Route exact path="/"><Filmpage /></Route>
				<Route path="/details/:id"><Filmdetailspage /></Route>
        <Route path="/vehicle/:id"><Vehiclepage /></Route>
        <Route path="/planet/:id"><Planetpage /></Route>
        <Route path="/character/:id"><Characterpage /></Route>
			</Switch>
    </div>
  );
}

export default withRouter(App);

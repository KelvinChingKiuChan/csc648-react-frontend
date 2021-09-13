import './App.css';

import ProfileKelvin from './Profiles/ProfileKelvin'
import ProfileAlex from './Profiles/ProfileAlex'
import ProfileHugh from './Profiles/ProfileHugh'
import ProfileChaoyi from './Profiles/ProfileChaoyi'
import ProfileDamon from './Profiles/ProfileDamon'
import ProfileSteven from './Profiles/ProfileSteven'

import About from './About';
import AppInfo from './Components/AppInfo';

import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
      <Switch>
          <Route exact path="/">
            <About/>
          </Route>
          <Route path="/Kelvin">
            <ProfileKelvin/>
          </Route>
          <Route path="/Hugh">
            <ProfileHugh/>
          </Route>
          <Route path="/Alex">
            <ProfileAlex/>
          </Route>
          <Route path="/Steven">
            <ProfileSteven/>
          </Route>
          <Route path="/Damon">
            <ProfileDamon/>
          </Route>
          <Route path="/Chaoyi">
            <ProfileChaoyi/>
          </Route>
          <Route path="/AppInfo">
            <AppInfo/>
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App
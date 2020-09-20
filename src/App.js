import React from 'react';
import './App.css';
import FoodBanner from './Components/FoodBanner/FoodBanner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import TopBanner from './Components/TopBanner/TopBanner';


function App() {
  return (
    <div className="App">
      <Router>
           <Switch>
          <Route path="/about">
        
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/">
          <FoodBanner></FoodBanner>
          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;

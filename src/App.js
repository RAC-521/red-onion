import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return(
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/breakfast'>
            <Breakfast></Breakfast>
          </Route>
          <Route path='/dinner'>
            <Dinner></Dinner>
          </Route>
          <Route path='/lunch'>
            <Lunch></Lunch>
          </Route>
          <Route exact path='/'>
            <Lunch></Lunch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

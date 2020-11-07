import React from 'react';
import './App.css';
import Login from './Login/Login';
import Search from './Search/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  var temp= 56;
  return (
    <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
    </Router>
  );
}

export default App;

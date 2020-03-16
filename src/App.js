import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './views/home';
import Registration from './views/registration/registration';
import Questions from './views/questions/questions';

class App extends Component {
 
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Redirect
            to={{
              pathname: "/home",
            }}
         />
        </Switch>
      </Router>
    );
  }
}


export default App;

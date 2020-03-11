import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ResultsView from '../views/resultsView/resultsView';
import Navbar from '../components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App row">
        <BrowserRouter>
          <div className="navbarContainer">
            <Navbar />
            <div>
              <Switch>
                <Route
                  path="/results"
                  component={ResultsView}
                />
                <Route
                  path="/"
                  component={ResultsView}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

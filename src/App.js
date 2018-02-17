import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Main from "./Main";


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Lol Analyzer</h2>
        </div>
        <p className="App-intro">
          Test Build Ver 0.1.0
        </p>
        <HashRouter>
          <div>
          <ul className="header">
            <li><NavLink to="/main">Lets gitit</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/main" component={Main}/>
          </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;

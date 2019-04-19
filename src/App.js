import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Routes from './routes';
import css from './App.css'



class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        {Routes}
      </div>
      </HashRouter>
    );
  }
}

export default App;

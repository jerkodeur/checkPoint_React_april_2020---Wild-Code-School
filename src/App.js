import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Game from './components/Game'
import ScreenShots from './components/ScreenShots';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path='/' component={Game} />
          <Route path='/screenShots' component={ScreenShots} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

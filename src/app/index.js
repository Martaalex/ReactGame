import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { GamePage, GameOver, GameWin } from './pages';
import { ROUTES } from '../constants';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.gamePage} component={GamePage} />
        <Route path={ROUTES.gameOver} component={GameOver} />
        <Route path={ROUTES.gameWin} component={GameWin} />
      </Switch>
    </Router>
  );
}
export default App;

import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function GameWin() {
  return (
    <div className="GameWin">
      <h1>Congratulations You Win!</h1>
      <Link to={`/game`}>Restart</Link>
    </div>
  );
}

export default GameWin;

import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

function GameOver() {
  return (
    <div className="GameOver">
      <h1>Game Over</h1>
      <Link to={`/game`}>Restart</Link>
    </div>
  );
}

export default GameOver;

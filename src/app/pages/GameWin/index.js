import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function GameWin() {
  return (
    <div className="GameWin">
      <div className="box">
        <h1>Congratulations You Win!</h1>
        <Link to={`/`}>
          <Button isPurple>Restart</Button>
        </Link>
      </div>
    </div>
  );
}

export default GameWin;

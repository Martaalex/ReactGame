import React from 'react';
import './index.scss';
import { Link, Redirect } from 'react-router-dom';
import Button from '../../components/Button';
import { ROUTES } from '../../../constants';

function GameOver({ location }) {
  const { state: { word } = {} } = location;

  if (!word) {
    return <Redirect to={ROUTES.gamePage} />;
  }

  return (
    <div className="GameOver">
      <div className="box">
        <h1>Game Over</h1>

        <p>Žodis būvo : {word}</p>
        <Link to={`/`}>
          <Button isPurple>Restart</Button>
        </Link>
      </div>
    </div>
  );
}

export default GameOver;

import React, { useState } from 'react';
import './index.scss';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../constants';

const ALPHABET = [
  'A',
  'Ą',
  'B',
  'C',
  'Č',
  'D',
  'E',
  'Ę',
  'Ė',
  'F',
  'G',
  'H',
  'I',
  'Į',
  'Y',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'R',
  'S',
  'Š',
  'T',
  'U',
  'Ų',
  'Ū',
  'V',
  'Z',
  'Ž',
];

const words = [
  { word: 'Miestas', hint: 'Vieta kur daug šurmulio' },
  { word: 'Mokykla', hint: 'Mokslo įstaiga' },
  { word: 'Šuo', hint: 'Geriausias žmogaus draugas' },
  { word: 'Katinas', hint: 'Žmonės nuo senu laiku jam tarnauja :D' },
  { word: 'Mašina', hint: 'Transporto priemonė' },
  { word: 'Parmezanas', hint: 'Sūrio pavadinimas' },
];

const randomIndex = () => Math.floor(Math.random() * words.length + 0);

function GamePage() {
  const [selectedWord, setSelectedWord] = useState(words[randomIndex()]);
  const [guesedLetters, setGuesedLetters] = useState([]);
  const [lives, setLives] = useState(5);
  const [showHint, setShowHint] = useState(false);

  const checkLetter = letter => {
    setGuesedLetters([...guesedLetters, letter]);
    if (!selectedWord.word.toUpperCase().includes(letter)) {
      setLives(lives - 1);
    }
  };

  if (lives === 0) {
    return <Redirect to={ROUTES.gameOver} />;
  }
  if (
    selectedWord.word
      .split('')
      .every(letter => guesedLetters.includes(letter.toUpperCase()))
  ) {
    return <Redirect to={ROUTES.gameWin} />;
  }

  const onReset = () => {
    setSelectedWord(words[randomIndex()]);
    setLives(5);
    setGuesedLetters([]);
    setShowHint(false);
  };

  return (
    <div className="Game-layout">
      <button className="btn" type="button" onClick={onReset}>
        Restart
      </button>

      <button className="btn" type="button" onClick={() => setShowHint(true)}>
        Hint
      </button>

      {showHint && <p>{selectedWord.hint}</p>}
      <div>
        {selectedWord.word.split('').map((letter, i) => (
          <span key={i}>
            {guesedLetters.includes(letter.toUpperCase()) ? letter : '*'}
          </span>
        ))}
      </div>
      <h1>
        Tu turi
        {lives}
        bandymus
      </h1>

      <div className="alphabet">
        {ALPHABET.map((letter, i) => (
          <button
            type="button"
            disabled={guesedLetters.includes(letter)}
            onClick={() => checkLetter(letter)}
            className="alphabet--letter"
            key={i}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GamePage;

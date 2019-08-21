import React from 'react';
import './index.scss';

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

class App extends React.Component {
  state = {
    selectedWord: words[randomIndex()],
    guesedLetters: [],
    lives: 5,
    showHint: false,
  };

  checkLetter = letter => {
    const { selectedWord, lives } = this.state;
    if (!selectedWord.word.toUpperCase().includes(letter)) {
      this.setState({
        lives: lives - 1,
      });
    }
  };

  render() {
    const { showHint, lives, guesedLetters, selectedWord } = this.state;
    const thisWord = selectedWord.word
      .toUpperCase()
      .split('')
      .map(letter => letter);

    if (lives === 0) {
      return <h1>You lose</h1>;
    }
    if (
      selectedWord.word
        .split('')
        .every(letter => guesedLetters.includes(letter.toUpperCase()))
    ) {
      return <h1>You win</h1>;
    }
    console.log(thisWord);
    return (
      <div className="Game-layout">
        <button
          className="btn"
          type="button"
          onClick={() => {
            console.log('restart');
          }}
        >
          Restart
        </button>

        <button
          className="btn"
          type="button"
          onClick={() => this.setState({ showHint: true })}
        >
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
              onClick={() =>
                this.setState(
                  {
                    guesedLetters: [...guesedLetters, letter],
                  },
                  () => this.checkLetter(letter)
                )
              }
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
}

export default App;

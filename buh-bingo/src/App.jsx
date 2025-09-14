import { useState } from 'react'
import './App.css'
import GameTitle from './components/GameTitle'
import GameGrid from './components/GameGrid'
import { triggerList } from './models/data.js';

export default function App() {
    
    const [debug, setDebug] = useState(true);
    const [gridSize, setGridSize] = useState(5);
    const [squares, setSquares] = useState(null);

    if (!squares) {
        setSquares(getRandomSquares());
    }

    function onUpdateSize(event) {
        let newSize = parseInt(event.target.value);
        setSquares(getRandomSquares(newSize));
        setGridSize(newSize);
    }

    function onClickNew() {
        setSquares(getRandomSquares());
    }

    function onClickReset() {
        setSquares(squares.map(square => ({ ...square, marked: false })));
    }

    function getRandomSquares(newSize = gridSize) {
        let newSquares = [];
        let taboos = [];

        if (debug) {
            console.log("Old squares:");
            console.log(squares);

            if (triggerList.length >= taboos.length) {
                taboos = [];
                console.log("Resetting taboos");
            }
        }

        while (newSquares.length < (newSize * newSize)) {
            let index = Math.floor(Math.random() * triggerList.length);6
            if (!taboos.includes(index)) {
                newSquares.push({
                    text: triggerList[index],
                    marked: false,
                    key: index,
                });
                taboos.push(index);
            }
        }

        if (debug) {
            console.log("Generated new squares:");
            console.log(newSquares);
        }

        return newSquares;
    }

  return (
      <>
          <GameTitle />
          <section className="bingo-settings">
              <div className="bingo-settings-item">
                  <label htmlFor="bingo-grid-size">Grid Size:</label>
                  <select id="bingo-grid-size" name="bingo-grid-size" defaultValue={5} onChange={onUpdateSize}>
                      <option value="3">3x3</option>
                      <option value="5">5x5</option>
                      <option value="7">7x7</option>
                  </select>
              </div>
              <div className="bingo-settings-item">
                  <button id="bingo-generate-button" onClick={onClickNew}>
                      New Game
                  </button>
              </div>
              <div className="bingo-settings-item">
                  <button id="bingo-reset-button" onClick={onClickReset}>Reset Board</button>
              </div>
          </section>
          <GameGrid size={gridSize} squares={squares} debug={debug} />
      </>
  )
};

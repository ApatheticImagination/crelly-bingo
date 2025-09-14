import React from "react";
import Showdown from "showdown";

export default function GameSquare({ number, square, debug }) {
    const [squareState, setSquareState] = React.useState(square);

    function onClickSquare() {
        square.marked = !square.marked;
        setSquareState({ ...square });
        if (debug) {
            console.log("Square " + number + " clicked");
        }
    }

    var converter = new Showdown.Converter();
    return (
        <div className={`bingo-square ${square.marked ? "bingo-square-marked" : "bingo-square-unmarked"}`} onClick={onClickSquare}>
            <span dangerouslySetInnerHTML={{__html: converter.makeHtml(square.text)}}></span>
            
        </div>
  );
}

import GameSquare from './GameSquare';

export default function GameGrid({ size, squares, debug }) {

    var components = [];
    for (let key = 0; key < size * size; key++) {

        console.log(`${key}: ${squares[key].text}`);
        components.push(<GameSquare id={`bingo-square-${key}`} key={key} number={key} square={squares[key]} debug={debug} />);
    };

    return (
        <section className={`bingo-grid bingo-grid-${size}`} >
            {components}
        </section>
    );
}

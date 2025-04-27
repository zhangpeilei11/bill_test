import { useState } from 'react';
function Square({ value, onSquareClick, currentNumber, number, winnerNumber }) {
  return <button className={winnerNumber.indexOf(number) != -1 ? "winner square" : currentNumber == number ? "square active" : "square"} onClick={onSquareClick}>{value}</button>;
}
export function Board({ xIsNext, squares, onPlay }) {
  const [currentNumber, setCurrentNumber] = useState(null);
  function handleClick(i) {
    const nextSquares = squares.slice();
    setCurrentNumber(i)
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner.winner;

  } else if (squares.indexOf(null) != -1) {
    status = "Next player: " + (xIsNext ? "X" : "O");
  } else {
    status = "平局";
  }

  const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]].map((row, index) => {
    const row1 = row.map((number) => {
      return <Square winnerNumber={winner ? winner.winners : [null, null, null]} currentNumber={currentNumber} number={number} key={number} value={squares[number]} onSquareClick={() => handleClick(number)} />
    })
    return <div className="board-row" key={index}>
      {row1}
    </div>
  })
  return <>
    <div className="status">{status}</div>

    {rows}
  </>;
}
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [boole, setBoole] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  // function jumpTo() {
  //   const nextHistory = [...history.slice(0, history.length - 1)];
  //   setHistory(nextHistory);   
  //   setCurrentMove(history.length - 1);
  //   console.log(history);

  //   console.log(currentMove);

  // }

  let moves = null;
  const moves1 = history.map((squares, move) => {
    let description;

    if (move > 0) {
      // const difference = history[move].filter((element) => !history[move-1].includes(element))

      history[move].forEach((item, idx) => {
        if (history[move - 1][idx] != item) {
          {
            description = "坐标:("+Math.floor(idx / 3)+","+idx%3+")"  +  item + '#' + move;
            return item
          }
        }
      });



    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  }).reverse();
  moves = boole?moves1:moves1.reverse()
  function toggle(){
    
    setBoole(!boole)
  }
  // const moves = <button onClick={() => jumpTo()}>悔棋</button>;
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <div><button onClick={toggle}>{boole?"正序":"倒序"}</button></div>
    </div>
  );
}
function calculateWinner(squares) {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winners: lines[i] };

    }

  }
  return null;
}
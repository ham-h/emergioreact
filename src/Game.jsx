import  { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './components/Helpres';
import "./Tic.css"
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);//first X wont come
  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);
  // const message = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${isXNext ? 'X' : 'O'} `;
    const message = winner
    ? `Winner is ${winner}`
    : isBoardFull
      ? 'It\'s a tie!'
      : `Next player is ${isXNext ? 'X' : 'O'}`;
      const handleSquareClick = position => {
        if (board[position] || winner) {
          return;// If the square is already occupied, do nothing.
        }
    
        setBoard(prev => {
          return prev.map((square, pos) => {
            if (pos === position) {
              return isXNext ? 'X' : 'O';
            }
    
            return square;
          });
        });
    
        setIsXNext(prev => !prev);
      };
    
  return (
    <div className="app"><h1>TIC TAC TOE</h1>
    <h2>{message}</h2>
    <Board board={board} handleSquareClick={handleSquareClick} /></div>
  )
}

export default Game
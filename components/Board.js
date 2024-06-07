"use client"
import React, { useState } from 'react';

const Board = ({ onWin }) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isBlueNext, setIsBlueNext] = useState(true);

  const handleClick = (index) => {
    const newSquares = squares.slice();
    if (calculateWinner(newSquares) || newSquares[index]) {
      return;
    }
    newSquares[index] = isBlueNext ? 'blue' : 'red';
    setSquares(newSquares);
    setIsBlueNext(!isBlueNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      onWin(winner);
    }
  };

  const renderSquare = (index) => (
    <button
      key={index}
      className={`w-16 h-16 border border-gray-400 flex justify-center items-center cursor-pointer ${
        squares[index] === 'blue' ? 'bg-blue-500' : squares[index] === 'red' ? 'bg-red-500' : 'bg-white'
      }`}
      onClick={() => handleClick(index)}
    />
  );

  return (
    <div>
      <div className="flex">{[0, 1, 2].map((index) => renderSquare(index))}</div>
      <div className="flex">{[3, 4, 5].map((index) => renderSquare(index))}</div>
      <div className="flex">{[6, 7, 8].map((index) => renderSquare(index))}</div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;

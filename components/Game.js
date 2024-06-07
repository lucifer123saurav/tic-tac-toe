"use client"
import React, { useState, useEffect } from 'react';
import Board from './Board';

const Game = () => {
  const [blueScore, setBlueScore] = useState(0);
  const [redScore, setRedScore] = useState(0);

  useEffect(() => {
    const storedBlueScore = localStorage.getItem('blueScore');
    const storedRedScore = localStorage.getItem('redScore');
    if (storedBlueScore !== null) setBlueScore(parseInt(storedBlueScore));
    if (storedRedScore !== null) setRedScore(parseInt(storedRedScore));
  }, []);

  const handleWin = (winner) => {
    if (winner === 'blue') {
      const newScore = blueScore + 1;
      setBlueScore(newScore);
      localStorage.setItem('blueScore', newScore);
    } else if (winner === 'red') {
      const newScore = redScore + 1;
      setRedScore(newScore);
      localStorage.setItem('redScore', newScore);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-52 mb-5">
        <div className="text-xl text-blue-500">Blue: {blueScore}</div>
        <div className="text-xl text-red-500">Red: {redScore}</div>
      </div>
      <Board onWin={handleWin} />
    </div>
  );
};

export default Game;

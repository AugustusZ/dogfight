import React from 'react';
import BattleGround from './BattleGround';
import Legend from './Legend';

const GameBoard = () => {
  return (
    <div>
      <Legend />
      <BattleGround size={9} />
    </div>
  );
};

export default GameBoard;

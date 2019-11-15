import React from 'react';
import BattleSpot from './BattleSpot';
import BattleSpotLabel from './BattleSpotLabel';

const BattleGround = ({ size }) => {
  const gridSize = Math.floor(size) + 2 || 10;
  const grid = new Array(gridSize ** 2).fill(0);
  return (
    <div className="battle-ground">
      {grid.map((_, index) => {
        const row = Math.floor(index / gridSize);
        const col = index % gridSize;
        const key = `${row}-${col}`;
        const isFirstRow = row === 0;
        const isLastRow = row === gridSize - 1;
        const isFirstCol = col === 0;
        const isLastCol = col === gridSize - 1;
        const isCorner =
          index === 0 ||
          (isLastRow && isFirstCol) ||
          (isFirstRow && isLastCol) ||
          index === gridSize ** 2 - 1;

        if (isCorner) {
          return <BattleSpotLabel key={key} />;
        }

        if (isFirstRow || isLastRow) {
          const colLabel = String.fromCharCode(col + 'A'.charCodeAt() - 1);
          return <BattleSpotLabel key={key}>{colLabel}</BattleSpotLabel>;
        }

        if (isFirstCol || isLastCol) {
          const rowLabel = row;
          return <BattleSpotLabel key={key}>{rowLabel}</BattleSpotLabel>;
        }

        return <BattleSpot key={key} />;
      })}
      <style jsx>{`
        div {
          display: grid;
          grid-template-columns: repeat(${gridSize}, 1fr);
          grid-template-rows: repeat(${gridSize}, 1fr);
          grid-gap: 2px;
        }
      `}</style>
    </div>
  );
};

export default BattleGround;

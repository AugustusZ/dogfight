import React, { useRef, useState, useEffect } from 'react';
import BattleGround from './BattleGround';
import Legend from './Legend';
import { gameGenerator } from '../utils/gameGenerator';
import { getXY } from '../utils/coord';

const GameBoard = () => {
  const size = 9;
  const fightersRef = useRef(gameGenerator(size));

  // hit = { index: injuryLevel }
  const [hits, setHits] = useState([]);
  useEffect(() => {}, []);

  const onHit = hitIndex => {
    console.debug(hitIndex);
    const hitPosition = getXY(hitIndex); // FIXME: correctly convert grid XY to board XY
    const hit = {
      [hitIndex]: Math.max(
        ...fightersRef.current.map(f => f.hitTest(hitPosition))
      )
    };
    console.debug({ hit, hits, fightersRef });
    setHits(prevHits => [...prevHits, hit]);
  };

  return (
    <div>
      <Legend />
      <BattleGround size={size} onHit={onHit} hits={hits} />
    </div>
  );
};

export default GameBoard;

import React from 'react';

const BattleSpot = ({ onClick }) => (
  <button className="battle-spot" onClick={onClick}>
    <style jsx>{`
      .battle-spot {
        padding: 0;
        padding-bottom: 100%;
        border: 0;
        box-shadow: inset 0 0 0 0 salmon;
        transition: box-shadow 0.2s;
      }

      .battle-spot:hover {
        box-shadow: inset 0 0 0 2px salmon;
      }
    `}</style>
  </button>
);
export default BattleSpot;

import React from 'react';

const BattleSpotLabel = ({ children }) => (
  <div className="battle-spot-label">
    <div className="content">{children}</div>
    <style jsx>{`
      .battle-spot-label {
        padding: 0;
        padding-bottom: 100%;
        border: 0;
        position: relative;
      }
      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-family: 'Lexy';
        font-size: 36px;
        color: #555;
      }
    `}</style>
  </div>
);
export default BattleSpotLabel;

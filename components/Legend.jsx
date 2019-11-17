import React from 'react';
import BattleSpot from './BattleSpot';
import {
  MAPPING_INJURY_CODE_TO_EMOJI,
  MAPPING_INJURY_CODE_TO_NAME
} from './constants';

const Legend = () => {
  return (
    <ul>
      {[0, 1, 2, 3, 4].map(code => (
        <li key={code}>
          {`${MAPPING_INJURY_CODE_TO_EMOJI[code]}: ${MAPPING_INJURY_CODE_TO_NAME[code]}`}
        </li>
      ))}
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          display: flex;
          width: 100%;
          justify-content: space-between;
        }

        li {
          display: flex;
          align-items: center;
          color: rgb(229, 195, 43);
        }
      `}</style>
    </ul>
  );
};

export default Legend;

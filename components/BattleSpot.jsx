import React from 'react';

import { MAPPING_INJURY_CODE_TO_EMOJI } from './constants';
/**
 * `code`:
 *
 * - `4`: 💥 Eliminated
 * - `3`: ☠️ Fatal injury
 * - `2`: ‼️ Severe injury
 * - `1`: ❗️ Minor injury
 * - `0`: ❌ No injury
 */
const BattleSpot = ({ code, onClick }) => (
  <button className="battle-spot" onClick={onClick}>
    <style jsx>{`
      .battle-spot {
        padding: 0;
        padding-bottom: 100%;
        border: 0;
        box-shadow: inset 0 0 0 0 salmon;
        transition: box-shadow 0.2s;
        background: #555;
        position: relative;
        box-sizing: border-box;
        
      }

      .battle-spot::after {
        content: '${
          typeof code === 'number' ? MAPPING_INJURY_CODE_TO_EMOJI[code] : ''
        }';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .battle-spot:hover {
        box-shadow: inset 0 0 0 2px salmon;
      }
    `}</style>
  </button>
);
export default BattleSpot;

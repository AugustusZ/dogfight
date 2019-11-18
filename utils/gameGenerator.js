import v from './vector';

// origin 0,0 is the upper left corner

const ORIENTATION_N = 0; // 0, -1
const ORIENTATION_E = 1;
const ORIENTATION_S = 2;
const ORIENTATION_W = 3;
const ORIENTATIONS = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0]
];

// size ==> #fighters
const GAME_SCALE = {
  5: 1,
  6: 1,
  7: 2,
  8: 3,
  9: 4,
  10: 5,
  11: 6,
  12: 8,
  13: 9,
  14: 11,
  15: 13,
  16: 14
};

const checkValidFighter = (fighter, size) =>
  fighter
    .getAll()
    .every(([x, y]) => x >= 0 && y >= 0 && x <= size - 1 && y <= size - 1);

class Fighter {
  hits = [];

  constructor([x, y], orientation) {
    this.orientation = orientation;

    const orientationVector = ORIENTATIONS[orientation];
    const orthOrientationVector = ORIENTATIONS[3 - orientation];
    const chest = [x, y];

    // injury level 3
    this.head = v.add(chest, orientationVector);

    // injury level 2
    this.body = [
      chest,
      v.sub(chest, orientationVector), // waist
      v.sub(chest, v.mul(orientationVector, 2)) // hip
    ];

    // injury level 1
    this.limbs = [
      v.add(chest, orthOrientationVector),
      v.sub(chest, orthOrientationVector),
      v.add(chest, v.mul(orthOrientationVector, 2)),
      v.sub(chest, v.mul(orthOrientationVector, 2)),
      v.sub(v.add(chest, orthOrientationVector), v.mul(orientationVector, 2)),
      v.sub(v.sub(chest, orthOrientationVector), v.mul(orientationVector, 2))
    ];
  }

  getAll = () => [this.head, ...this.body, ...this.limbs];

  hitTest = hit =>
    v.eq(hit, this.head)
      ? 3
      : v.within(hit, this.body)
      ? 2
      : v.within(hit, this.limbs)
      ? 1
      : 0;

  hit = hit => {
    if (!v.within(hit, this.hits) && this.hitTest(hit)) {
      this.hits.push(hit);
    }
  };

  getAllHits = () => [...hits];
}

/** return fighters[] */
export const gameGenerator = size => {
  const numOfFighters = GAME_SCALE[size];
  if (!numOfFighters) {
    return [];
  }
  const fighters = [];

  // TODO:
  const fighter = new Fighter([2, 1], 0);
  fighters.push(fighter);

  return fighters;
};

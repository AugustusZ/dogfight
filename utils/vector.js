const add = ([x1, y1], [x2, y2]) => [x1 + x2, y1 + y2];
const sub = ([x1, y1], [x2, y2]) => [x1 - x2, y1 - y2];
const mul = ([x1, y1], factor) => [x1 * factor, y1 * factor];
const eq = ([x1, y1], [x2, y2]) => x1 === x2 && y1 && y2;
const within = (p, list) => list.findIndex(v => eq(p, v)) > -1;

export default { add, sub, mul, eq, within };

export const getXY = (index, size) => [index % size, Math.floor(index / size)];
export const getIndex = ([x, y], size) => x + y * size;

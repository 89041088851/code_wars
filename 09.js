function isTriangle(a, b, c) {
  let sides = [a, b, c];
  let max = Math.max(...sides);
  let sum = sides.reduce((a, b) => a + b, 0);
  return sum - max > max;
}
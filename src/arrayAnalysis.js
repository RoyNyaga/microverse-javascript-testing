/* eslint-disable no-mixed-operators */
const arrayAnalysis = (array) => ({
  average: Math.round(1000 * array.reduce((sum, a) => sum + a, 0) / array.length) / 1000,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});
module.exports = arrayAnalysis;

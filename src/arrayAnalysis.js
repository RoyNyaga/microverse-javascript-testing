const arrayAnalysis = (array) => {
  return {
    average: Math.round(1000 * array.reduce((sum, a) => sum + a, 0) / array.length) / 1000,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}
module.exports = arrayAnalysis
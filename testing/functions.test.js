const capitalizeString = require('../src/capitalizeString')
const reverseString = require('../src/reverseString')
const calculator = require('../src/calculator')
const caesar = require('../src/caesar')
const arrayAnalysis = require('../src/arrayAnalysis')

test('should Capitalize first letter', () => {
  expect(capitalizeString('string')).toBe('String')
})

test('should reverse string', () => {
  expect(reverseString('string')).toBe('gnirts')
})

test('should return 4', () => {
  expect(calculator.add(2, 2)).toBe(4)
})
test('should return 0', () => {
  expect(calculator.subtract(2, 2)).toBe(0)
})
test('should return 4', () => {
  expect(calculator.multiple(2, 2)).toBe(4)
})
test('should return 1', () => {
  expect(calculator.divide(2, 2)).toBe(1)
})
test('Caesar cipher is case sensitive on 5 shift', () => {
  expect(caesar('abcd', 5)).toBe('fghi')
})
test("Caesar cipher returns Caesar of abcdz 'fghie' on 5 shift and correctly wraps after z", () => {
  expect(caesar('abcdz', 5)).toBe('fghie')
})
test('Caesar cipher works with punctuation', () => {
  expect(caesar('meow!', 5)).toBe('rjtb!')
})
test('takes an array of numbers and returns an object with average, min, max, and length', () => {
  expect(arrayAnalysis([1, 5, 8, 3, 5, 4, 3])).toMatchObject({
    average: 4.143,
    min: 1,
    max: 8,
    length: 7
  })
})

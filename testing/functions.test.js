const capitalizeString = require('../src/capitalizeString')
const reverseString = require('../src/reverseString')
const calculator = require('../src/calculator')

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
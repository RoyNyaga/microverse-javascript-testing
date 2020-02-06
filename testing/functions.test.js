const capitalizeString = require('../src/capitalizeString')
const reverseString = require('../src/reverseString')

test('should Capitalize first letter', () => {
  expect(capitalizeString('string')).toBe('String')
})

test('should reverse string', () => {
  expect(reverseString('string')).toBe('gnirts')
})

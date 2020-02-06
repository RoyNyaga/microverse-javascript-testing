const reverseString = string => {
  const splitStringCharacter = string.split('')
  const reverseArrayCharacter = splitStringCharacter.reverse()
  const joinArray = reverseArrayCharacter.join('')
  return joinArray
}
module.exports = reverseString
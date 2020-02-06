const caesar = (string, shift) => {
  string = string.split('').map((char) => shiftCharacter(char, shift))
  return string.join('')
}

const shiftCharacter = (character, move) => {
  let characterCode = character.charCodeAt(0)
  if (characterCode >= 97 && characterCode <= 122) {
    characterCode = mode(characterCode - 97 + move, 26) + 97
  } else if (characterCode >= 65 && characterCode <= 90) {
    characterCode = mode(characterCode - 65 + move, 26) + 65
  }
  return String.fromCharCode(characterCode)
}

const mode = (n, m) => {
  return ((n % m) + m) % m
}

module.exports = caesar

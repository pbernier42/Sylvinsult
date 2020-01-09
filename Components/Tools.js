export function isUpperCase(letter) {
  return letter == letter.toUpperCase()
}
export function isVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function getRandomWord(tab) {
  return tab[getRandomInt(tab.length)]
}

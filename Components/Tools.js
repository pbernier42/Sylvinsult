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

export function getTunedWord(gender, word) {
  //console.log(word)
  if (gender != "female")
    return word
  if (word[word.length - 1] == 'é' ||
      word.substring(word.length - 3, word.length) == "ant")
    return word + 'e'
  if (word[word.length - 1] == 'f')
    return word.substring(0, word.length - 1) + "ve"
  if (word.substring(word.length - 3, word.length) == "eux")
    return word.substring(0, word.length - 1) + "se"
  return word
}

export function getTunedSentence(gender, sentence) {
  if (gender != "female")
    return sentence
  var split = sentence.split(' ');

  for (var i = 0; i < split.length; i++)
    split[i] = getTunedWord(gender, split[i]);
  console.log(split)
  return split.join(' ')
}

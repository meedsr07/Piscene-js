function longWords(arr) {
  return arr.every((element) => element.length >= 5);
}

function oneLongWord(arr) {
    return arr.some(element => element.length >= 10)
}

function noLongWords(arr) {
    return !(arr.some(element => element.length >= 7))
}

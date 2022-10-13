// modifiera sum() tills testet blir godkänt!
function sum(a, b) {
  console.log(sum);
  return a + b;
}

function myOwnMultiplyFunction(a, b) {
  return a * b;
}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero(value) {
  if (value < 0) {
    return true;
  }
  else {
    return false;
  }
}

function round(number){
  return Math.round(number)
}

function addingUp(num) {
  let a = 0;
  let b = 0;
  for (let index = 0; index < num; index++) {
    a++
    b += a;
  }
  return b;
}

function findMinMax(arrayNumbers) {
  let min = Math.min(...arrayNumbers);
  let max = Math.max(...arrayNumbers);
  let minMax = {min: min, max: max}
  return minMax;
}

function afterXmasEve2020(date) {
  let input = new Date(date)
  const xmasEve2020 = new Date('2020-12-24')
  if (input >= xmasEve2020) {
    return true;
  }
  else {
    return false;
  }
}

// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!

//etc...

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum;
module.exports.multiply = myOwnMultiplyFunction;
module.exports.isBelowZero = isBelowZero;
module.exports.round = round;
module.exports.addingUp = addingUp;
module.exports.findMinMax = findMinMax;
module.exports.afterXmasEve2020 = afterXmasEve2020;
module.exports.sortByStringLength = undefined;
module.exports.charCounter = undefined;
module.exports.numbersOnly = undefined;
module.exports.sortNumbers = undefined;
module.exports.personFactory = undefined;
module.exports.doublePrice = undefined;
module.exports.and = undefined;
module.exports.removeLeadingTrailing = undefined;
module.exports.getKeysAndValues = undefined;

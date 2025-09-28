function isVowel(character) {
  let isVowel = character === 'a' || character === 'e';
  isVowel = isVowel || character === 'i' || character === 'o';
  isVowel = isVowel || character === 'u';
  return isVowel;
}

function firstVowelAt(string) {
  for (let currIndex = 0; currIndex < string.length; currIndex++) {
    if (isVowel(string[currIndex])) {
      return currIndex;
    }
  }

  return -1;
}

function calcMinDist(string, previousVowelIndex) {
  let minDist = -1;

  for (let currIndex = previousVowelIndex + 1; currIndex < string.length; currIndex++) {
    if (isVowel(string[currIndex])) {
      const currDist = currIndex - previousVowelIndex
      minDist = (minDist > currDist || minDist <= 0) ? currDist : minDist;
      previousVowelIndex = currIndex;
    }
  }

  return minDist;
}

function getMinDist(string) {
  let previousVowelIndex = firstVowelAt(string);

  if (previousVowelIndex === -1) {
    return -1;
  }

  let minDist = calcMinDist(string, previousVowelIndex);
  return minDist;
}

function generateMessage(string, actual, expected) {
  const status = (actual === expected) ? " ✅ " : " ❌ ";
  const inputFragment = ' | [ ' + string + ' ]';
  const actualFragment = " | actual: " + actual;
  const expectedFragment = " | expected: " + expected;
  return status + inputFragment + actualFragment + expectedFragment;
}

function testCalcMinDist(string, expected) {
  const actual = getMinDist(string);
  const output = generateMessage(string, actual, expected);
  console.log(output);
}

function main() {
  testCalcMinDist("aba", 2);
  testCalcMinDist("sdfghjk", -1);
  testCalcMinDist("asdd", -1);
  testCalcMinDist("apple", 4);
  testCalcMinDist("thoughtworks", 1);
  testCalcMinDist("abbbbbabbbbabbbabae", 1);
}

main();

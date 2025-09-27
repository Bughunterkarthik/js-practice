function isVowel(character) {
  let isVowel = character === 'a' || character === 'e';
  isVowel = isVowel || character === 'i' || character === 'o';
  isVowel = isVowel || character === 'u';
  return isVowel;
}

function isConsonant(character) {
  let isConsonant = character !== 'a' && character !== 'e';
  isConsonant = isConsonant && character !== 'i' && character !== 'o';
  isConsonant = isConsonant && character !== 'u';
  return isConsonant;
}

function splitWord(string) {
  let resultString = "" + string[0];
  let previousType = isConsonant(string[0]) ? "consonant" : "vowel";

  for (let currIndex = 1; currIndex < string.length; currIndex++) {
    if (previousType === 'vowel') {
      if (isConsonant(string[currIndex])) {
        resultString = resultString + string[currIndex];
        console.log("consonant: ", string[currIndex]);
        previousType = "consonant";
      }

    } else {
      if (isVowel(string[currIndex])) {
        resultString = resultString + string[currIndex];
        console.log("vowel: ", string[currIndex]);
        previousType = "vowel";

      }
    }
  }
  return resultString;
}

function generateMessage(string, actual, expected) {
  const status = (actual === expected) ? " ✅ " : " ❌ ";
  const inputFragment = ' | [ ' + string + ' ]';
  const actualFragment = " | actual: " + actual;
  const expectedFragment = " | expected: " + expected;

  return status + inputFragment + actualFragment + expectedFragment;
}

function testSplitWord(string, expected) {
  const actual = splitWord(string);
  const output = generateMessage(string, actual, expected);
  console.log(output);
}

function main() {
  testSplitWord("a", "a");
  testSplitWord("karthik", "karik,t,h");
  testSplitWord("thoughtworks", "togor,huh,t,w,k,s");
}

main();

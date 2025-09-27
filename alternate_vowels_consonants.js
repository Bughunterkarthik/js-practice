function isVowel(character) {
  let isVowel = character === 'a' || character === 'e';
  isVowel = isVowel || character === 'i' || character === 'o';
  isVowel = isVowel || character === 'u';
  return isVowel;
}

function convert() {

}

function splitWord(string) {
  let actual = string;
  let resultString = "";
  while (actual.length !== 0) {
    resultString = resultString + actual[0];
    let remainingString = "";
    let isPreviousCharVowel = isVowel(actual[0]);

    for (let currIndex = 1; currIndex < actual.length; currIndex++) {
      if (!isVowel(actual[currIndex]) && (isPreviousCharVowel === true)) {
        resultString = resultString + actual[currIndex];
        isPreviousCharVowel = false;
      } else if (isVowel(actual[currIndex]) && (isPreviousCharVowel === false)) {
        resultString = resultString + actual[currIndex];
        isPreviousCharVowel = true;
      } else {
        remainingString = remainingString + actual[currIndex];
      }
    }

    actual = remainingString;
    if (actual.length >= 1) {
      resultString = resultString + ',';
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
  testSplitWord("hello", "helo,l");
  testSplitWord("apple", "ape,p,l");
  testSplitWord("there", "tere,h");
  testSplitWord("abyss", "ab,y,s,s");
  testSplitWord("this", "tis,h");
  testSplitWord("", "");
  testSplitWord("thoughtworks", "togor,huh,t,w,k,s");
  testSplitWord("aaabbb", "ab,ab,ab");
}

main();

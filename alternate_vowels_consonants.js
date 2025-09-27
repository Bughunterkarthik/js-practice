function splitWord(string) {
  return string;
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
}

main();

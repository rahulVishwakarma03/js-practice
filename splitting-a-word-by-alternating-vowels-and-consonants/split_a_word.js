function isVowelAt(word, index) {
  switch (word[index]) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}

function splitWord(word) {
  let combinedWord = "";
  let currentWord = word;

  while (currentWord !== "") {
    let firstSplitWord = currentWord[0];
    let isVowelRequired = !isVowelAt(currentWord, 0);
    let secondSplitWord = "";

    for (let index = 1; index < currentWord.length; index++) {
      if (isVowelRequired === isVowelAt(currentWord, index)) {
        firstSplitWord += currentWord[index];
        isVowelRequired = !isVowelRequired;
      } else {
        secondSplitWord += currentWord[index];
      }
    }
    currentWord = secondSplitWord;
    combinedWord += combinedWord === "" ? firstSplitWord : "," + firstSplitWord;
  }
  return combinedWord;
}

function testSplitWord(word, expectedResult) {
  const actualResult = splitWord(word);
  const mark = actualResult === expectedResult ? "✅" : "❌";
  const messege = "[" + word + "]" + " || " + expectedResult + " | " + actualResult + mark;
  console.log(messege);
}

function testAll() {
  testSplitWord("apple", "ape,p,l");
  testSplitWord("there", "tere,h");
  testSplitWord("hello", "helo,l");
  testSplitWord("abyss", "ab,y,s,s");
  testSplitWord("this", "tis,h");
  testSplitWord("address", "ades,d,r,s");
  testSplitWord("ddress", "des,d,r,s");
  testSplitWord("aaabbb", "ab,ab,ab");
}
testAll();

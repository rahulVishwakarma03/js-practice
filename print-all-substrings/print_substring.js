const str = "abcd";

let startIndex = 0;
let substr = "";
let endIndex = startIndex;
for (let currIndex = startIndex; currIndex <= endIndex; currIndex++) {
  substr = substr + str[currIndex];
  if (currIndex === endIndex && endIndex < str.length) {
    console.log(substr);
    endIndex++;
  } else if (endIndex === str.length && startIndex < str.length) {
    startIndex = startIndex + 1;
    currIndex = startIndex - 1;
    substr = "";
    endIndex = startIndex;
  }
}

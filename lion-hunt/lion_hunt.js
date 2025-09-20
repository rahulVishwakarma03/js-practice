// ### Lion Hunt..

const testCase1 = "LZ";
const testCase2 = "Z L";
const testCase3 = "L     Z";
const testCase4 = "L     L";
const testCase5 = "Z   Z   Z";
const testCase6 = "L  ZL Z";
const testCase7 = "L ZL";
const testCase8 = " L ZL";

const testCaseToUse = testCase1;

let charToCompare = "";
let idxToCompare = -1;
let distanceCounter = -1;

if(testCaseToUse[0] === "Z"){
    charToCompare = "Z";
    idxToCompare = 0;
} else if(testCaseToUse[0] === "L"){
    charToCompare = "L";
    idxToCompare = 0;
}

console.log(charToCompare, idxToCompare);




//console.log("Input: ", testCaseToUse, "\nOutput: ", /* your result here */);

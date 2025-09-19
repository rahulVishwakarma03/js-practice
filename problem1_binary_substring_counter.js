let input = 65;
const subStr = "10";

//Converting Decimal to binary
let binary = 0;
let multiplier = 1;
while(input > 0){
    let rem = input%2;
    binary = rem * multiplier + binary;
    multiplier = multiplier* 10;
    input = (input-rem)/2;
}
console.log(binary);
console.log(subStr);


//finding no. of digit
let noOfDigit = 0;
let subStrCp = 1 + subStr;
while(subStrCp > 9){
    noOfDigit = noOfDigit + 1;
    subStrCp = (subStrCp - subStrCp%10)/10;
}
console.log("digit = ", noOfDigit);

//finding diviser
let diviser = 1;
for(let i=1; i<=noOfDigit; i++){
    diviser = diviser*10;
}
// console.log(d);

//Comparing
let answer = 0;
const subStrAsNum = subStr * 1;
while(binary > 0){
    let rem = binary % diviser;
 
    if(rem === subStrAsNum){
        answer = answer + 1;
    }
    binary = (binary - binary%10)/10;
}

console.log("answer", answer);

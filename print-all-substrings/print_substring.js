const superString = "abcd";

for (let i = 0; i < superString.length; i++) {
    let subString = superString[i];
    console.log(subString);
    for (let j = i + 1; j < superString.length; j++) {
        subString += superString[j];
        console.log(subString);
    }
}

const str = "abcd";

for(let startIndex=0; startIndex<str.length; startIndex++){
    let substr = "";
    let endIndex = startIndex;
    for(let currIndex = startIndex; currIndex <= endIndex; currIndex++){
        substr = substr + str[currIndex];
        if(currIndex === endIndex && endIndex < str.length){
            console.log(substr);
            endIndex++;
        }
    }
}

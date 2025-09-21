const str = "abcd";

for(let startIndex=0; startIndex<str.length; startIndex++){
    for(let endIndex = startIndex; endIndex<str.length; endIndex++){
        let substr = "";
        for(let currIndex = startIndex; currIndex<=endIndex; currIndex++){
            substr = substr + str[currIndex];
        }
        console.log(substr);
    }
}

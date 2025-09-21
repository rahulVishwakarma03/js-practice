const str = "abc";

for(let startIndex=0; startIndex<str.length; startIndex++){
    for(let endIndex = startIndex; endIndex<str.length; endIndex++){
        for(let currIndex = startIndex; currIndex<=endIndex; currIndex++){
            console.log(str[currIndex]);
        }
    }
}

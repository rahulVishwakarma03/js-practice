const startingInput = 2;
const lastInput = 20;

for(let input = 2; input <= lastInput; input++){
    let diviser = 2;
    let isFactor = false;
    while (!isFactor && diviser < input){
        if(input % diviser == 0){
            isFactor = true;
        }
        diviser++;
    }
    const suffix = !isFactor ? "is Prime" : "is Composite";
    console.log(input, suffix);
}
    

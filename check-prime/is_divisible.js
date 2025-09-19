const input = 8;
let diviser;
let isFactor = false;
for (let i = 2; i < input; i++) {
    if (input % i === 0) {
        isFactor = true;
    }
}
const suffix = !isFactor ? "is Prime" : "is Composite"

console.log(input, suffix);

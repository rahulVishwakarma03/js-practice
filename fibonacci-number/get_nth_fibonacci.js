let firstFib = 0;
let secondFib = 1;
const input = 10;
let crrFib = ((input < 3) && (input === 1)) ? firstFib : secondFib;
for (let i = 3; i <= input; i++) {
    crrFib = firstFib + secondFib;
    firstFib = secondFib;
    secondFib = crrFib;
}
console.log(input, "->", crrFib);

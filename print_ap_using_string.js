const input = ".....";
let curr = "";
let total = "";

for (let i = 1; i <= input.length; i++) {
    curr = curr + '.'
    total = total + curr;
}
console.log(total.length);

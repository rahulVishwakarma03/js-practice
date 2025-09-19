let age = 21;

if(age >= 18 && age <60){
    console.log("Man is able to do job");
} 

let res = (age >= 18 && age < 60) ? "Can do job" : "Can't do job";
console.log(res);


if(age >= 18){
    console.log("Adult");
}

if(age >=18){
    console.log("you can drive a car");
} else{
    console.log("You can't drive a car");
}

let canDriveCar = age >= 18;
console.log(canDriveCar);
console.log((age >= 18) ? "canDrive" : "can'tDrive");


let paisa = 87;
let result = (paisa >= 75) ? 100 : 50;
console.log("round off =",result);


let greaterNumber = (23 > 54) ? 23 : 54;
console.log(greaterNumber);

const n1=14;
const n2=15; 
const n3=6;

if(n1 >= n2 && n1 >= n3){
    console.log(n1, "is greater");
}else if(n2 >= n1 && n2 >= n3){
    console.log(n2, "is greater");
} else{
    console.log(n3, "is greater");
}

const month = 10;
let monthOfBirth = 10;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
     case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
     case monthOfBirth:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        
    default :
        console.log("Enter a number which is less than 12");
        break;
    
}


let num = 5;
let i=1;
let factorial = 1;

// while(i<=num){
//     factorial = factorial * i;
//     i = i+1;
// }
// console.log(factorial);

for(let j=1; j<=5; j++){
    factorial = factorial * j;
    console.log("factorial of ",j,"=", factorial);
}

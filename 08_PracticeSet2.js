//Q1

const prompt = require("prompt-sync")();

let a=prompt("Enter age:")
a =Number.parseInt(a)

if(a>10 && a<20){
    console.log("It is valid")
}
else{
    console.log("It is inValid")
}

//Q3 num should be divisible by 2 and 3

let num=prompt("Enter a num :");
num=Number.parseInt(num); 

if(num%2 == 0 && num%3 ==0){
    console.log("+1")
}
else{
    console.log("-1"); 
}

//Q5 ternary operator

console.log(num>18? "you can drive" : "You cannot drive"); 
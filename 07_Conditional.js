const prompt = require("prompt-sync")(); 

let a = prompt("Enter n")   // acts as string
console.log(typeof(a)) 

a=Number.parseInt(a)         //typecasting : here converting  
console.log(typeof(a))       //              string into number

if(a>0){
    console.log("valid age")
}
else{
    console.log("Enetr valid age")
}

console.log("You can",a>18? "Not drive" : "drive"); //ternary operator


//teranry operator
let num = 7;  

// ternary operator
console.log(num%2===0? "1":"2")
// console.log(num % 2 === 0 ? "Even" : "Odd");

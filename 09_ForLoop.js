//  output:-Sum of num from 1 to  5 is 15

const prompt = require("prompt-sync")();

let n = prompt("Enter n");     //prompt  convert  all into string
 n = Number.parseInt(n);   //so this  need to convert string to integer.
let sum=0;
 
for(let i=1 ; i<=n ; i++){
    sum+= i;
}

console.log("Sum of num from 1 to "+n + " is "+sum) 




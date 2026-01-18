const prompt = require("prompt-sync")()

let num = Math.floor(Math.random()*100) 
console.log(num);   
/*creation of random number*/

let score =100;
let a;
do{a = prompt("Guess a number ") 
    if(a == num){
        console.log("You guessed it right your score is",score);
    }
    else if(a<num){
        console.log("your num is smaller than actual");
        score--;
    }
    else if(a>num){
        console.log("your num is bigger than the actual");
        score--;
    }
}while(a != num)


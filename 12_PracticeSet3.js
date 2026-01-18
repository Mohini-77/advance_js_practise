const prompt = require("prompt-sync")();

//Q1write a program to print marks of student in a object using for loop

const marks={
    Ritesh : 98,
    Ram : 87,
    Bulla : 69
}

for(let i=0 ; i<Object.keys(marks).length ; i++){
    console.log("Marks of "+ Object.keys(marks)[i] +" are "+marks[Object.keys(marks)[i]] )
}

//Q2 use For in loop for above question

for(let key in marks){
    console.log("Makrs of "+key+" are "+marks[key])
}

//Q3display "try again " until user enters correct num
let cn =48;

let i =prompt("Guess a number ")
while(i != cn){ 
    i = prompt("try again! ")
}
console.log("You guessed it right!")


//Q4 using func find the mean of numbers
const mean= (a,b,c,d)=>{
    console.log((a+b+c+d)/4)
}

mean(1,2,3,4)
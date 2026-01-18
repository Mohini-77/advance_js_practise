const prompt = require("prompt-sync")()

//Q1 crete a array and push a number

let arr=[1,2,3,4,5]

let a = prompt("Enter a number ")
a = Number.parseInt(a)

arr.push(a)
console.log(arr);

//Q2 push untill no is not 0

let arr1=[1,2,3,4,5]
let b;
do{
    b = prompt("Enter a number ")
    b= Number.parseInt(b)
    arr1.push(b)
}while(b!=0)

console.log(arr1);

//Q3 filter which are divisible by 2

let arr2 = [1,2,3,4,5,6,7,8]

let ans = arr2.filter((n) =>{
    return n%2==0
})
console.log(typeof(ans),ans);

//Q4 create an array of sq of given number

let arr3 = [1,2,3,4,5,6,7,8,9]

ans = arr3.map((a) =>{
    return a*a
})
console.log(ans);

//Q5 use reduce to calculate fact of num

let arr4 = [1,2,3]

ans = arr4.reduce((a,b) =>{
    return a*b
})

console.log(ans);




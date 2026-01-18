//Q1
console.log("Har\"".length)                             //4


//Q2
let str="Im Ritesh Mali , a software developer"
let word = "software"

console.log(str.includes(word))                         //true               ---software
console.log(str.startsWith(word))                         //false
console.log(str.endsWith("developer"))                   //true

//Q3
const lower = (a)=>{
    console.log(a.toLowerCase())                         //ritesh
}

let a="RITESH"
lower(a)

//Q4 Extarct the number from string

let str1 ="Plz give me Rs 1000"
let amt = str1.slice("Plz give me Rs ".length)
console.log(amt)                                         //1000

//Q5 use replace

let chng = str1.replace("Plz" ,"")
console.log(chng)                                            // give me Rs 1000
===================================================================================================================

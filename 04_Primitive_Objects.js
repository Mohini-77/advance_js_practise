//primitive datatypes

let a= null
a=1234;
let b=123;
let c="Ritesh"; 
let d=Symbol("It is symbol");
let e=BigInt("123")+BigInt("34");
let f=true;
let g

console.log(a,b,c,d,e,f,g);    //1234 123 Ritesh Symbol(It is symbol) 157n true undefined
console.log(typeof g);          //undefined

//objects

const item = {
    Ritesh:true,                 //dictionary   or  mappping
    price:130,
    120:true,
    
}
console.log(item["Ritesh"]);              //true
console.log(item["120"]);                //true
console.log(item .price)                  //130

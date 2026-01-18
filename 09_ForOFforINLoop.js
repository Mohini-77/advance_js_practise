let marks ={
    Ritesh : 90,
    Harry : 87,
    Shubh : 89
}

for(let i in marks){
    console.log("The marks of "+i+" are "+marks[i]); 
}

for(let  i of "Ritesh"){
    console.log(i)
}

// =========================================================================================

let price={
Apple: 80,
Cherry: 60,
Berry:50
}

for(let i in price){
console.log(i)
console.log(price[i]);
// output:-
// Apple
// 80
// Cherry
// 60
// Berry
// 50

}

//for Of:-
// Objects in JavaScript are not iterable, so for...of cannot be used directly.
// Only arrays, strings, sets, maps, etc., are iterable.

for(let i of "Apple"){
console.log(i) 

}
// output:-
// A
// p
// p
// l
// e
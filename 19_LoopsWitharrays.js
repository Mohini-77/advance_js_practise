let arr = [1,4,6,4,5]

//forEach loop

// forEach prints squares but does not change the original array.
arr.forEach((i)  =>{
    console.log(i*i);
})
console.log(arr);      
// output:-
// 1
// 16
// 36
// 16
// 25
// [ 1, 4, 6, 4, 5 ]


//Array.from         ->   to create array form objects or....

let name = "Ritesh"
let arr2 = Array.from(name)
console.log(arr2);                           //[ 'R', 'i', 't', 'e', 's', 'h' ]



// for .....of 

let num = [12,3,4,23,45]

for(let i of num){
    console.log(i);           // will print data  12,3,4,23,45
}

//for ....in

for(let i in num){
    console.log(num[i]);    // will print data 12,3,4,23,45
    console.log(i);         //will print indices 0 1 2 3 4
}


//normal for loop

for(let i=0 ; i<num.length ; i++){
    console.log(num[i]);
}
// Output:-
// 12
// 3
// 4
// 23
// 45

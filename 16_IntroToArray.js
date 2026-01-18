let arr=[1,3,'Ritesh',false,null]   //Diff types are allowed

console.log(arr)                          // [ 1, 3, 'Ritesh', false, null ]
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4]) 
console.log(arr.index)                          //undefined
console.log(arr.indexOf("Ritesh"))              //2


console.log("Thr length if Array is ",arr.length)                         //5

console.log(typeof arr)                                                  //object

for(let i=0; i<arr.length ; i++){
    console.log(arr[i])
// Output:-
// 1
// 3
// Ritesh
// false
// null
}

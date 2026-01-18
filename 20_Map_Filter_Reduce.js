//Array Map Method        -> perform operation on each element
let arr = [1,4,5,6,7]

let ans = arr.map( (value,index,array)=>{
    return value*index;
})

console.log(typeof(ans),ans);
 
//Array Filter Method             -> check condn

let arr2 = [12,23,34,56,78]

let ans1 = arr2.filter((num) =>{
    return num>23
})

console.log(typeof(ans1),ans1);

//Array Reduce Method    -> reduce to single value

let arr3 = [0,4,3,2]

let ans2 = arr3.reduce((i,j)=>{
    console.log(i,j);
    return i+j
})

console.log(typeof(ans2),ans2);
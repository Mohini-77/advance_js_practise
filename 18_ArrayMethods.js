let arr = [143,62,33,4,5,446]
let arr1 = [11,12,13,14,15,16]
delete arr[0]          //does not affect the lenght of array
console.log(arr)                       //[ <1 empty item>, 62, 33, 4, 5, 446 ]
 
let newArray = arr.concat(arr1)  //concatination
console.log(newArray)            //  [ <1 empty item>, 62, 33, 4, 5, 446, 11, 12, 13, 14, 15, 16 ]  

arr.sort()
console.log(arr)                 

const compare = (a,b)=>{
    return a-b
}

arr.sort(compare)     //use compare func for assending or desc
console.log(arr)                 

let arr2 = [1,23,3,44,5,6,7,8,89]
arr2.splice(2,3,400,401,402)         //stores deleted items
console.log(arr2)

let  tmp  = arr1.slice(2,5)
console.log(tmp);

arr2.reverse()            //reverse
console.log(arr2);
// let arr = [1,2,3,43,4,53]

// let a = arr.toString()                //converts array  to string

// console.log(a , typeof(a))                     //1,2,3,43,4,53 string

// let c = arr.join("_")
// console.log(c)                              //1_2_3_43_4_53         

// let b = arr.pop()           //remove element from last position      //pop [ 1, 2, 3, 43, 4 ] 53
// console.log("pop",arr,b)

// let s=arr1.pop(20)                         //pop() does NOT take any argument.
// console.log(s) 

// let d = arr.push(90)      //push element at last position and         //push [ 1, 2, 3, 43, 4, 90 ] 6
// console.log("push",arr,d)     //returns length

// let e =arr.shift()            //remove first element                  //shift [ 2, 3, 43, 4, 90 ] 1
// console.log("shift",arr,e)   

// let f = arr.unshift(91)       //add at first position                //Unshift [ 91, 2, 3, 43, 4, 90 ] 6
// console.log("Unshift",arr,f)  //returns length


let arr1=[10,20,30,"mohini",60]
console.log(arr1)                               //[ 10, 20, 30, 'mohini', 60 ]

let x=arr1.toString()
console.log(x,typeof(x))                     //10,20,30,mohini,60 string

let y=arr1.join("_")
console.log(y)                                  //  10_20_30_mohini_60

let m=arr1.pop()                            //remove element from last position 
console.log(m)                                //60

let s=arr1.pop(20)                         //pop() does NOT take any argument.
console.log(s) 
   


let n=arr1.push("happy")                     ////push element at last position 
console.log(n)                                 //[ 10, 20, 30, 'happy' ]

console.log(arr1)                             //[ 10, 20, 30, 'happy' ]


let o=arr1.shift()                          //remove first element         
console.log()
 console.log(arr1)                        //   [ 20, 30, 'happy' ]

let p=arr1.unshift(900)                         //add at first position 
console.log(p)
console.log(arr1)                            //[ 900, 20, 30, 'happy' ]


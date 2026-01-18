let arr = [12,34,34,23,5,775,456]
let [x,y,z, ...rest] = arr

// console.log(x,y,z,rest);



// if need skip variables 
let arr1 = [123,4535,4,65,6,4,63,3,5,]
let [a,,, ...rest1] = arr1
// console.log(a,rest1);


let {p,q} = {p:1,q:2}
// console.log(p,q);

const v ='lsd'
const s ='ld'

const c = {v,s} // curly brackets so'll behave like objets
// console.log(c);


// spread operator

let arr2 =[2,4,6,4,5767,3]
let obj ={...arr2}                    //will convert arr to obj
console.log(obj);

function sum(a,b,c){
    return a+b+c
}

console.log(sum(...arr2));           
//Function  declaration types:-

function sub(q,w)
{
    console.log("Sub of  Number is:",q-w)
}

const mul=(s,t)=>{                         //arrow  function with parameter
    return s*t
}


const sum=(k,l)=> k+l
let result = sum(20,10)                   // arrow  function direct pass value here.
console.log(result);                           //30

const list=() =>{
    console.log("Good Day!!")             //arrow  function without parameter
}

let h=50
let i=10
sub(h,i)                              // Sub of  Number is:40
sub(100,20)                           // Sub of  Number is:80
console.log(mul(10,2))                 //20
list()                               //Good Day!!"




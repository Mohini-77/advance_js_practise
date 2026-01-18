//Q1 print hello world after 2 sec uing iife

const p1 =async(text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(text)
        }, 1000);
    })
}

(
    async()=>{
    let a= await p1("Hello")
    console.log(a)
    let b = await p1("World")
    console.log(b); 
    }
)()  

// Q2 using spread operator find avg of num 

const sum=(a,b,c)=>{
    return (a+b+c)/3
}

let arr =[1,2,3]
console.log(sum(...arr));

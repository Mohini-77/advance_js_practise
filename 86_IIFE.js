const a = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(654)
        }, 2000);
    })
}

(async ()=>{
    let b = await a()
    console.log(b);
    let d = await a()       
    console.log(d);
    let c = await a()
    console.log(c);
})()                                 //this how we call IIFE




try{
    ritesh
}
catch(err){
    console.log(err.name);
    console.log(err.message);
} 

const prompt = require("prompt-sync")();

try{
    let age = prompt("Enter your age ")
    age = Number.parseInt(age)
    if(age>100){
        throw new SyntaxError("This is Awesome")
        // throw new Error("This is Awesome")
        // throw new ReferenceError("This is Awesome")
    }
}
catch(error){
    console.log(error.name);
    console.log(error.message);
}
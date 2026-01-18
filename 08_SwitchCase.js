// “Without prompt, where is the Enter something option?”

const prompt=require("prompt-sync")();
let a=prompt("Enter somthing :");   //always acts as a string
// a=Number.parseInt(a)
  
switch(a){
    case "12":
        console.log("ok");  
        break;
 
    case "Mohini":
        console.log("It is a name");
        break;

    default:
        console.log("Enter Some valid term");
}



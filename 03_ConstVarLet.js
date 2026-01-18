/*console.log("Var debugging")
var a = 5;
var b = "Ritesh";

{
    var a = 6;   

    //As seen here a is locally changed but value is reflected globally because of var
}

console.log(a);   
*/

let a=4;
let b="Ritesh";
const ab = "Ritesh";    // const cannot be redeclare  or updated

{
    let a='Harry';      //as blocked scoped ,life value is 
    console.log(a);     //within the brackets
}

console.log(a);

// ============================================================

let x=4;
let y="sanu";
const xy = "mohini";    // const cannot be redeclare  or updated

{
        
    console.log(y);     //within the brackets  //sanu
}

console.log(y);                           //sanu



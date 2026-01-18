
//if  enter 10 then print number between 1-9 range.
const prompt=require("prompt-sync")()
let num=prompt("Enter Number:")         //prompt  convert all to string

num=Number.parseInt(num)                 //this  again convert string to integer.

let i=0
while(i<num)
{
    console.log(i)
    i++
}
// Output:- print 0-9









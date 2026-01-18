//Q1 add string and num
let a ="Ritesh"
let b = 143;

console.log((a+b));                 //Ritesh143
console.log(b+a)                    //143Ritesh

//Q2 find datatype of Q2
console.log(typeof(a+b))            //string

//Q3 can you change const object to hold string
//ans->No

//Q4 Add new key to object

const ab ={
    Ritesh: true,
    name:"Xyz",
    course:"js"
}
ab['Friend'] = true;
ab["Ritesh"]= false;
ab["Mohini"]="Happy"
 
console.log(ab)  //to print whole object content { Ritesh: false, name: 'Xyz', course: 'js', Friend: true }
console.log(ab["Friend"])   //these are the two ways
console.log(ab.Ritesh)      //to call value in key-value pair
console.log(ab.Mohini)         //Happy
console.log(ab.name)          //Xyz


//Q5 create dictionary
const dict={
    yakka : "to hardwork", 
}
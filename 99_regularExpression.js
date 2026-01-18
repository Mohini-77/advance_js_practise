let regx=/very/g
let str1 ='very very good boy very verymuch'

//this will replace only one occurence
console.log(str1.replace("very" , "VERY")); 


//below will change all the occurences using  regular expressions
console.log(str1.replace(regx , "VERY"));
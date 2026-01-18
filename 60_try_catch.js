setTimeout(() => {
    console.log("hacking rahul's account");
}, 5000);

try{
    console.log(rahul);  // if not used then exectuion will stop after an error
}
catch(error){
    console.log("Technical issue");
}

setTimeout(() => {
    console.log("Hacking succesfull");
}, 6000);   
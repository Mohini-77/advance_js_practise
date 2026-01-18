try{
    console.log(p)
}
catch(err){
    console.log("This error is detected");
    console.log(objt);
}
finally{
    console.log("i am here");
}

//finally will execute if there is any error in try or catch 
//or if we return in try, then also finaaly will exexcute

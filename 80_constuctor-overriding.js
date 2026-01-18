class Animal{

    constructor(name){
        this.name=name
        console.log("parent constrctor called");
    }

    run(){
        console.log(this.name + " is running");
    }
    shouting(){
        console.log(this.name + " is shouting");
    }
}

class Human extends Animal{    

    constructor(name,color){
        super(name)      //mandatory
        this.name=name 
        this.color = color 
    }      
    speak(){
        console.log(this.name + " is speaking");
    }
    run(){
        super.run() //using super ,parent function run() also invoked
        console.log("Slowly slowly");
    }
    abc(){
        console.log(this.name + " is of "+ this.color + " color");
    }
}

let p1 = new Human("person","white")
p1.run()
p1.speak()
p1.abc()

console.log(p1 instanceof Animal);
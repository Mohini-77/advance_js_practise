class Animal{
    constructor(name,color){
        this.name=name
        this.color=color
    }

    run(){
        console.log(this.name + " is running");
    }
    shouting(){
        console.log(this.name + " is shouting");
    }
}

class Human extends Animal{          
    speak(){
        console.log(this.name + " is speaking");
    }
    run(){
        super.run() //using super parent function run() also invoked
        console.log("Slowly slowly");
    }
}

let p1 = new Human("person","white")
p1.run()
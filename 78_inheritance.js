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

class Human extends Animal{          //Inheritance
    speak(){
        console.log(this.name + " is speaking");
    }
}

let ritesh = new Human("Ritesh","Black")
ritesh.run()
ritesh.speak()
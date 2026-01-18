class Animal {
    constructor(name) {
        this.name = Animal.capitalize(name)  // using static method here
    }

    walk() {
        console.log(`Animal ${(this.name)} is walking`);
    }

    static capitalize(name) {        //static method 
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

let dog = new Animal("jack")
dog.walk()
console.log(Animal.capitalize("jacking"));
// Q1 create complex class and set real and img value using constructor
// Q2 add two complex number in above class
// Q5 use setter and getter to set real and imagianry values 

class Complex{
    constructor(real,img){
        this.real = real
        this.img=img
    }

    add(num){
        this.real = this.real + num.real
        this.img = this.img + num.img
    }

    get real(){
        return this._real
    }

    get img(){
        return this._img
    }

    set real(newreal){
        this._real = newreal
    }
    
    set img(newimg){
        this._img = newimg
    }
}

let obj1 = new Complex(2,7)
obj1.real=11
obj1.img=11
let obj2 = new Complex(1,6)

obj1.add(obj2)
console.log(obj1.real+"+"+obj1.img+"i");

//Q3 create class student form human

class Human{
    constructor(name,item) {
        this.name=name
        this.item=item
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
}

class Student extends Human{
    walk(){
        super.walk()
        console.log("I am student");
    }
}

let s1 = new Student('Ritesh')
s1.walk()

// Q4 instance of
console.log(s1 instanceof Human);


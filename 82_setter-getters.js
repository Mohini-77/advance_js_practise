class Animal{
    constructor(name){
        this._name = name
    }

    fly(){
        console.log(this._name +" ud rhe he");
    }

    set name(newname){
        this._name = newname
    }

    get name(){
        return this._name
    }
}

let a =  new Animal()
a.name="peacock"
a.fly()

// instanceOf
console.log(a instanceof Animal);


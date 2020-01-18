class Pet {
    constructor (name) {
        this.owner = "Chris";
        this.name = name;
    }
    walk () {
        console.log('walka walka');
    }
}

const newPet =  new Pet("Indi");
console.log(newPet);
newPet.walk();

class Dog extends Pet {
    constructor (name) {
        super(name);
    }
}

let newDog = new Dog("Aiko");
console.log(newDog);
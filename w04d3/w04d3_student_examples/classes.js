class Person {
    //Let's add some properties with a constructor function (usually added at top). This is a function that gets called once, each time an object is created:
    // constructor () {
    //     this.legs = 2;
    //     this.arms = 2;
    //     this.eyes = 'blue';
    //     this.hair = 'blonde';
    // }    
    //OR YOU CAN PASS PARAMETERS
    constructor (name, age, eyes, hair, lovesCats = false) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
      }


    // Right now, our object doesn't do anything. Let's have it do some stuff;
    //These methods can, of course, take parameters:
    // We only had to update our code in one place, and then every instance of the class now has the updated functionality. Sweet!
    // If we have multiple methods, don't put commas between them:
    greet (otherPerson) {
        console.log("hi " + otherPerson + "!")
    }
    walk () {
        console.log("I dislike when my Segway is in the shop");
    }
    //We can of course, alter the properties of an instance, after it is created:
    // me.hair = 'supernova red';
    // console.log(me);

    //But it's a nice practice to define a method that will alter that:
    setHair (hairColor) {
        this.hair = hairColor;
    }
}

//Now we can "instantiate" or create new objects using this class. We do this by adding the new keyword before calling the class name like a function.
const me = new Person("Chris", 31, "blue", "brown");
const you = new Person();
console.log(me);
// console.log(you);
// console.log(typeof me);
// console.log(typeof you);

// me.greet("lauren");
// me.walk();
// you.greet("bob");
// you.walk();



const vendingMachine = {
    snacks: [
      {
        name: 'kitkat',
        price: 6
      },
      {
        name: 'sun chips',
        price: 7
      },
      {
        name: 'apple',
        price: 12
      }
    ],
    vend (input) {
      console.log('vending', vendingMachine.snacks[input]);
    }
  };
  
  vendingMachine.vend(1);



//   Objects interacting with other objects
// We can pass an object to another object to have them interact

// class Person {
//   constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//     this.legs = 2;
//     this.arms = 2;
//     this.name = name;
//     this.age = age;
//     this.eyes = eyes;
//     this.hair = hair;
//     this.lovesCats = lovesCats;
//     this.lovesDogs = lovesDogs || false;
//   }
//   greet (otherPerson) {
//     console.log('hi ' + otherPerson + '!');
//   }
//   classyGreeting (otherClassyPerson) {
//     console.log('Greetings ' + otherClassyPerson.name + '!');
//   }
//   setHair (hairColor) {
//     this.hair = hairColor;
//   }
//   walk () {
//     console.log('I hate when my Segway is in the shop.');
//   }
// }
// const me = new Person('Karolin', 41, 'green', 'copper dark ash blonde', true, true);
// const you = new Person('Matt', 36, 'blue', 'blonde');

// me.classyGreeting(you);
// you.classyGreeting(me);
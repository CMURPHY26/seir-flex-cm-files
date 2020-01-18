//1.  We assisgn a value to a variable with var, let or const = value
//valid lines:
// let a = 0;
//const b = 1;

//2. You can change the value of the variable by listing the variable with out var or let. Ex. b = a + c;

//3. You can assign an existing variable by setting the new variable to the existing one. ex: let  b = a;

//Strings Activity 1
let firstVariable = "Hello World";
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = "string";
// The value of firstVariable is 1

let yourName = "Chris";
console.log('Hello, my name is ' + yourName);

const a = 6;
const b = 100;
const c = -5;
const d = 3000;
const e = 'Jelly Bean';
// 1. a < b
// 2. c < d
// 3. 'Peanut === 'Peanut'
// 4. a < b > c
// 5. a === a !== d
// 6. e === 'Jelly Bean';
// 7. 48 == '48';
// 8. 'e' != 'Eh'

// The Farm
// let animal = 'cow';

// if (animal === 'cow') {
//     console.log('mooooo');
// } else {
//     console.log("Hey! You're not a cow.");
// }

//Driver's Ed
// var personAge = 17;

// if (personAge >= 16) {
//     console.log('Here are the keys');
// } else {
//     console.log("Sorry, you're too young");
// }

//Just Loop it

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 500; i >= 50; i--) {
//     console.log(i);
// }

// Lets get odd
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i + " is an odd number");
// }

//Give me Five

// for (let i = 3; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log("I found a " + i + ". High five!")
//     } else if (i % 3 === 0) {
//         console.log("I found a " + i + ". Three is a crowd.")
//     }
// }

//Saving Account

// let bank_account = 0;

// for (let i = 1; i <= 10; i++) {
//     bank_account += i;
// }

// console.log(bank_account);

// let bank_account = 0;

// for (let i = 1; i <= 100; i++) {
//     bank_account += i;
// }

// bank_account *= 2;

// console.log(bank_account);


//Fibonacci - NEEDS WORK
fibonacciNumber = 1;

for (let i = 0; i <= 10; i++) {
    fibonacciNumber += i;
    console.log(fibonacciNumber);
}
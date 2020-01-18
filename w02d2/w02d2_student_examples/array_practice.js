// Declare an empty array
//const arr = [];
let groceries = ["oranges", "chocolate", "eggs", "butter", "cheese"];
console.log(groceries[1]);

// let randomItems = [true, 123, "Hello!", "Hi again!"];
// console.log(randomItems[3]);

let favFoods = ["Pizza", "Burgers", "Empanadas"];
// console.log(favFoods[0]);

//Array .length method
console.log(favFoods.length);
console.log(favFoods[favFoods.length - 1]);

console.log(favFoods);
//Changing Elements
// favFoods[1] = "Sushi";
// console.log(favFoods);

// favFoods.push("Burgers");
// console.log(favFoods);

let sizes = ["kids size","small", "medium", "large", "x-large"];

console.log(sizes[Math.floor(sizes.length / 2)]);
// you can add code into a variable to make it cleaner
let midPoint = Math.floor(sizes.length / 2);

console.log(sizes[midPoint]);


//LOOPS Iterate over an array

const kitchenSink = ["Dirty spoon", "sponge", "plate with gunk", "soap", "water"];

for (let i = 0; i < kitchenSink.length; i++) {
    console.log(kitchenSink[i]);
}
//Easy Does It
// let quotes = ["Inspiration, move me brightly", "Sometimes we live no particular way but our own", "Once in a while you get shown the light, in the strangest of places if you look at it right"];

// Random
// Given the following array 

// const randomThings = [1, 10, "Hello", true];
// //how do you access the 1st element in the array?
// console.log(randomThings[0]);
// // Change the value of "Hello" to "World".
// randomThings[2] = "World";
// // Check the value of the array to make sure it updated the array.
// console.log(randomThings);


// // We've Got Class
// // Given the following array 
// const ourClass = ["Outrun", "Zoom", "Github", "Slack"];

// // What would you write to access the 3rd element of the array?
// console.log(ourClass[2]);
// // Change the value of "Github" to "Octocat"
// ourClass[2] = "Octocat";
// // Add a new element, "Cloud City" to the array.
// ourClass.push("Cloud City");
// console.log(ourClass);


// Mix It Up
// Given the following array 
const myArray = [5 ,10 ,500, 20];

// using the push method, add the string "Egon" to the end of the array.
myArray.push("Egon");
console.log(myArray);
// using a method, remove the string from the end of the array.
myArray.pop();
console.log(myArray);
// using the unshift method, add the string "Bob Marley" to the beginning of the array
myArray.unshift("Bob Marley");
console.log(myArray);
// using a different method, remove the string from the beginning of the array
myArray.shift();
console.log(myArray);
// use the reverse method on this array
myArray.reverse();
console.log(myArray);


// Biggie Smalls
// Write an if..else statement that iterates over the myArray array declared above:

// console.log little number if the number is entered is less than 100

// If the number entered is 100 or more, alert big number.

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < 100) {
        console.log("little number")
    } else if (myArray[i] >= 100) {
        console.log('big number');
    }
}

// Monkey in the Middle
// Write an if...else if...else statement:

// console.log little number if the number entered is less than 5.

// If the number entered is more than 10, log big number.

// Otherwise, console.log "monkey".

let number = 6;
if (number < 5) {
    console.log("little number");
} else if (number > 10) {
    console.log("big number");
} else {
    console.log("monkey");
}


// What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// Kristyn can't find her left shoe. Remove this item from her closet and save it to a variable named kristynShoe.
let kristynShoe = kristynsCloset.shift();
// console.log(kristynsCloset);
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5, 0 , "raybans");
// console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[4] = "stained knit hat";
console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0]);
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][2]);
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][2]);
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom's looking awkward in a ${thomsCloset[0][0]}, ${thomsCloset[1][2]}, and ${thomsCloset[2][2]}!`);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

// HFM (Hungry for More - Optional Bonus Exercises)
// Write a loop that prints the numbers in order

const twoDArray = [
  [9,8,7],
  [6,5,4],
  [3,2,1],
];


twoDArray.sort();
for (const element of twoDArray) {
  element.sort();
  // console.log(element);
  for (i = 0; i < element.length; i++) {
    console.log(element[i]);
  }
}

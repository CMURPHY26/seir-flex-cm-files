const adventurer = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ["sword", "potion", "tums"],
}

// console.log(adventurer.belongings);
// console.log(adventurer["belongings"]);

// // DOT NOTATION
// adventurer.hitpoints
// // BRACKET NOTATION
// adventurer['hitpoints']

// // USING VARIABLE FOR KEY VALUE
// let points = 'hitpoints'
// // the key points doesn't exist in the object
// adventurer.points // returns undefined
// // [points] converts the variable into a string
// // and then it runs the query
// adventurer[points]


// // first thing
// console.log(adventurer.belongings[0]);
// // last thing
// console.log(adventurer.belongings[adventurer.belongings.length - 1]);

// //loop over array within object
// for(let i =0; i < adventurer.belongings.length; i += 1) {
//     console.log(adventurer.belongings[i]);
// }


// //create new key called favColors array within object and set to an array of 2 colors
// adventurer.favColors = ["blue", "green"];
// //Console.log array
// console.log(adventurer.favColors);
// //push a new color into the array
// adventurer.favColors.push("orange");
// console.log(adventurer.favColors);
// //loop over the array and console.log all of the colors
// for (let i = 0; i < adventurer.favColors.length; i += 1) {
//     console.log(adventurer.favColors[i]);
// }

// //create a key with the value as an object
// adventurer.companion = {
//     name: "Velma",
//     type: "Bat"
// }
// //console.log the companion object name
// console.log(adventurer.companion.name);
// // or console.log(adventurer.companion["name"];

// // Change the companion's name "Velma" to "Susan"
// adventurer.companion.name = "Susan";
// // Console.log to check that the name was changed
// console.log(adventurer.companion.name);
// // Add another object to the adventurer object called companion2.

// // companion2 should have a name and a type "Insect"
adventurer.companion2 = {
    name: "Chris",
    type: "Insect"
};
//console.log companion 2 object
console.log(adventurer);
console.log(adventurer.companion2);

adventurer.companion.companion = {
    name: "Tim",
    type: "Parasite"
}

console.log(adventurer);
console.log(adventurer.companion.companion.name);
console.log(adventurer.companion.companion.type);

adventurer.companion.companion.belongings = ["SCUBA tank", "Rogan josh", "health insurance"];

console.log(adventurer.companion.companion);


// when would you use and object over an array?
// object use case...
// when an element has multiple attributes that define it

// array use case...
// contain a collection of elements

//storing objects in an array
const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];

console.log(movies[0].title);
//looping through an array of objects
for (let i = 0; i < movies.length; i += 1) {
    console.log(movies[i].title);
}

//Use variables to store a key - like points var at the top of this document
const monster = {
    name: 'Slimer',
    age: 6
}

const someVar = 'name';

console.log(monster[someVar]);

/ For in loop to loop through object

const movie = { title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 }
//loop through key names
for (let key in movie) {
    console.log(key);
}
// loop through key values
for (let key in movie) {
    console.log(movie[key]);
}

for(let key in movie){
    console.log(`${key}: ${movie[key]}`)
  }

  //this returns back an array of keys
  Object.keys(movie)
  // => [ 'title', 'director', 'year' ]
  Object.values(movie)
  // => [ 'L\'Avventura', 'Michelangelo Antonioni', 1960 ]


  ///////////////////////////
 ///FOR IN LOOPS FOR OBJECTS
///////////////////////////

const movie2 = { title: "Eraserhead", director: "David Lynch", year: 1978 }

// Use a for..in loop to print all the keys of the movie object
for(key in movie2) {
    console.log(`key - ${key}`);
}
// Use a for..in loop to print all the values of the movie object
for(key in movie2) {
    console.log(`values - ${movie2[key]}`);
}

// Use a for..in loop to print all the key & value pairs of the movie object
for(key in movie2) {
    console.log(`${key}: ${movie2[key]}`);
}



////ADVANCED
const movies3 = [
	{ title: "L'Avventura", director: "Michelangelo Antonioni", year: 1960 },
	{ title: "Eraserhead", director: "David Lynch", year: 1978 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 },
	{ title: "Dayereh", director: "Jafar Panahi", year: 2000 }
]

// ADVANCED
let newMovieObj = {}
for(let i = 0; i < movies3.length; i += 1){
  let subObj = {}
  for(let key in movies3[i]){
    if(key != 'title') {
      subObj[key] = movies3[i][key]
    }
  }
  newMovieObj[movies3[i].title] = subObj
}
newMovieObj




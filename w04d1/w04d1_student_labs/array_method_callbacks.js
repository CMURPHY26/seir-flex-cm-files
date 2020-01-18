//FILTER
const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826,209, 419, 309, 48, 738,709,728, 607, 9, 863, 976, 588, 611, 164,383, 261, 14, 525,479,169,755,574, 330,
  736, 541, 838, 577,957,179,436,333, 206, 295,744,926, 799, 691,259,401,104,630,645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5,
  13,13,17, 5, 5, 18, 12, 5, 18, 11, 2, 2,  9,  8, 4,5,18, 15,18,0,6,11,18,14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6,
  10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'AND', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big',
  'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'WAX', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack',
  'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the',
  'next', 'prize', 'Jaded', 'ZOMBIES', 'acted', 'quaintly', 'but', 'kept','DRIVING','their','oxen','forward!' ]


  /////////////////////////
 ////EVERY METHOD
////////////////////////

// // Determine if every number is greater than or equal to 0
// //ARROW FUNCTION DECLARATION
// const greaterThan0 = nums.every( num => num >= 0);
// //OR TRADITIONAL FUNCTION DECLARATION
// const greaterThan0_2 = nums.every(function (num) { return num >= 0; });
// console.log(greaterThan0);
// console.log(greaterThan0_2);

// // determine if every word shorter than 8 characters
// //ARROW FUNCTION DECLARATION
// const wordShorterThan8 = panagrams.every( word => word.length < 8);
// console.log(wordShorterThan8);
// //OR TRADITIONAL FUNCTION DECLARATION
// const wordShorterThan8_2 = panagrams.every(function (word) {
//   return word.length < 8;
// });
// console.log(wordShorterThan8_2); 



  /////////////////////////
 ////FILTER METHOD
////////////////////////

//   // filter the array for numbers less than 100
// //.filter will return an array of filtered elements
// // ARROW FUNCTION DECLARATION
// const below100 = nums.filter(function(num){return num < 100});
// //OR TRADITIONAL FUNCTION DECLARATION
// const below100_2 = nums.filter(num => num < 100);
// console.log(below100);
// console.log(below100_2);




// // filter words that have an even length
// // ARROW FUNCTION DECLARATION
// const evenWords = panagrams.filter(word => !(word.length % 2));
// //OR TRADITIONAL FUNCTION DECLARATION
// const evenWords2 = panagrams.filter(function (word) {return !(word.length % 2)});
// console.log(evenWords);
// console.log(evenWords2);



  /////////////////////////
 ////FIND METHOD
////////////////////////

// // Find the first value divisible by 5
// // ARROW FUNCTION DECLARATION
// const firstDivisBy5 = nums.find( num => num % 5 === 0);
// console.log(firstDivisBy5);
// //OR TRADITIONAL FUNCTION DECLARATION
// const firstDivisBy5_2 = nums.find( function (num) { return num % 5 === 0});
// console.log(firstDivisBy5_2);

// // find the first word that is longer than 6 characters

// // ARROW FUNCTION DECLARATION
// const firstLongerThan6 = panagrams.find( word => word.length > 6);
// console.log(firstLongerThan6);
// //OR TRADITIONAL FUNCTION DECLARATION
// const firstLongerThan6_2 = panagrams.find( function (word) { return word.length > 6});
// console.log(firstLongerThan6_2);




  /////////////////////////
 ////FIND INDEX
////////////////////////

// // find the index of the first number that is divisible by 3
// // ARROW FUNCTION DECLARATION
// const numDivisBy3 = nums.findIndex( num => num % 3 === 0);
// console.log(numDivisBy3); // returns index of 4 which is 309
// // OR TRADITIONAL FUNCTION DECLARATION
// const numDivisBy3_2 = nums.findIndex( function (num) { return num % 3 === 0});
// console.log(numDivisBy3_2);


// // find the index of the first word that is less than 2 charaters long
// // ARROW FUNCTION DECLARATION
// const wordLessThan2Chars = panagrams.findIndex( word => word.length < 2); //This statement returns -1 because there is no string with less than 2 characters
// console.log(wordLessThan2Chars);
// // OR TRADITIONAL FUNCTION DECLARATION
// const wordLessThan2Chars_2 = panagrams.findIndex( function (word) { return word.length <= 2;}); //This statement checks <= to 2 and displays index 23 "my"
// console.log(wordLessThan2Chars_2);



  /////////////////////////
 ////FOR EACH
////////////////////////


// // console.log each value of the nums array multiplied by 3
// // ARROW FUNCTION DECLARATION
// const valueMultBy3 = nums.forEach( num => console.log(num * 3));


// // OR TRADITIONAL FUNCTION DECLARATION
// const valueMultBy3_2 = nums.forEach( function (num) { return console.log(num * 3)});


// // console.log each word with an exclamation point at the end of it
// // ARROW FUNCTION DECLARATION
// const wordWithBang = panagrams.forEach( word => {
//     if( word[word.length - 1] === "!") {
//     console.log(word);
//     }
// });

// // OR TRADITIONAL FUNCTION DECLARATION
// const wordWithBang2 = panagrams.forEach( function (word) {
//   if(word[word.length-1] === "!") {
//     console.log(word);
//   }
// })

// Thought Questions

// What happened to the original array?
// console.log(nums);
//Nothing happened to the original array. It remained unchanged.

// Can you store the values from a forEach method in a new array?
// const newArray = [];
// nums.forEach(num => newArray.push(num));
// console.log(newArray);


  /////////////////////////
 ////MAP
////////////////////////


// // make a new array of each number multiplied by 100
// // ARROW FUNCTION DECLARATION
// const newNumsArray = [];
// nums.map( num => newNumsArray.push(num * 100));
// console.log(newNumsArray);

// // OR TRADITIONAL FUNCTION DECLARATION

// const newNumsArray2 = [];
// nums.map( function (num) {
//   newNumsArray2.push(num * 100);
// });

// console.log(newNumsArray2);


// // make a new array of all the words in all uppercase
// // ARROW FUNCTION DECLARATION
// const newWordArray = [];
// panagrams.map( word => {
//   if( word === word.toUpperCase()){
//     newWordArray.push(word);
//   }
// });

// console.log(newWordArray);

// // OR TRADITIONAL FUNCTION DECLARATION

// const newWordArray2 = [];

// panagrams.map( function (word) {
//   if(word === word.toUpperCase()) {
//     newWordArray2.push(word);
//   }
// });

// console.log(newWordArray2);

// Thought Questions
// What happened to the original array?
// console.log(panagrams);
// Nothing happened to the original array. It just created a new array.

// Can you store the values from a map method in a new array?
// const newNumsArray3 = [];
// nums.map( num => newNumsArray3.push(num));
// console.log(newNumsArray3);
// Yes, you can store the values from a map method in a new Array.


  /////////////////////////
 ////REDUCE
////////////////////////


// // Add all the numbers in the array together using the reduce method
// // ARROW FUNCTION DECLARATION
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(smallNums.reduce(reducer));

// // OR TRADITIONAL FUNCTION DECLARATION
// const reducer2 = function (accumulator, currentValue) {
//   return accumulator + currentValue;
// }
// console.log(smallNums.reduce(reducer2));


// // concatenate all the words using reduce
// const wordReducer = (accumulator, currentValue) => `${accumulator} ${currentValue}`;// added string literal to add spaces between words
// console.log(panagrams.reduce(wordReducer));



// Thought Questions
// What happened to the original array?
// Nothing happened to the original array


  /////////////////////////
 ////SOME
////////////////////////


// // Find out if some numbers are divisible by 7
// // ARROW FUNCTION DECLARATION
// console.log(nums.some( num => num % 7 === 0));
// // OR TRADITIONAL FUNCTION DECLARATION
// console.log(nums.some( function (num) {
//   return num % 7 === 0;
// } ));


// // Find out if some words have the letter a in them
// // ARROW FUNCTION DECLARATION
// console.log(panagrams.some( word => word.includes("a")));
// console.log(panagram.some( word => word.includes("a")));
// // OR TRADITIONAL FUNCTION DECLARATION
// console.log(panagrams.some( function (word) {
//   return word.includes("a");
// }))



  /////////////////////////
 ////SORT
////////////////////////


// Try to sort without any arguments, do you get what you'd expect with the numbers array?
// const sortedArray = nums.sort();
// console.log(sortedArray);


// // Sort the numbers in ascending order
// // ARROW FUNCTION DECLARATION
// const sortedAscending = nums.sort( (a,b) => a - b);
// console.log(sortedAscending);
// // OR TRADITIONAL FUNCTION DECLARATION
// const sortedAscending2 = nums.sort( function (a,b) {
//   return a - b;
// })
// console.log(sortedAscending2);

// // Sort the numbers in descending order
// // ARROW FUNCTION DECLARATION
// const descendingSort = nums.sort( (a,b) => b - a);
// console.log(descendingSort);
// // OR TRADITIONAL FUNCTION DECLARATION
// const descendingSort2 = nums.sort( function (a,b) {
//   return b - a;
// });
// console.log(descendingSort2);

// // Sort the words in ascending order
// // ARROW FUNCTION DECLARATION
// const wordAscending = panagrams.sort( (a,b) => {
//   if( a < b ) {
//     return -1;
//   } 
//   if ( a > b) {
//     return 1;
//   }
//   return 0;
// });
// console.log(wordAscending);


// // Sort the words in descending order
// // ARROW FUNCTION DECLARATION
// const wordDescending = panagrams.sort( (a, b) => {
//   if(a > b) {
//     return -1;
//   }
//   if(a < b) {
//     return 1;
//   }
//   return 0;
// });
// console.log(wordDescending);
// console.log(panagrams);



// Thought Questions
// What happened to the original array?
// It sorts the original array


// Hungry for More
// filter for words that have at least two vowels in them

// find each instance of the word zephyr - include case insensitve and plurals (Zephyr, zephyrs, and Zephyrs), and list the index positions

// filter for products with a price that is less than 20, using the array below:
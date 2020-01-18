///////////////
//NOT DRY CODE - NEED TO USE FUNCTIONS
//////////////
// let name = "Chris";

// console.log('Hello there ' + name);
// console.log("Welcome to SEI!");

// name = "Paul";
// console.log('Hello there ' + name);
//function declarations should use const because functions should not change ever

////////////////
//DRY CODE WITH FUNCTIONS
////////////////

// const printBoo = () => {
//     console.log('======');
// 	console.log('Boo!');
// 	console.log('======');
// }

// printBoo();

//Arrow function: 
    //const myFunction = (param1) => {//Code goes here}
//Arrow function shortcut syntax: 
    //const myFunction = param1 => {//Code goes here}
//Classic function syntax: 
    // var myFunction = function(param1){//Code goes here}
    //function myFunction(param1) {//Code goes here}
///////////////////////
// You can now run:
// myFunction(123)
//////////////////////
//Example:
// const greetStudent = (name) => {
//     console.log(`Hello there ${name}. \nWelcome to SEI!`);
//     console.log(1 + 1);
// }

// greetStudent("Chris");
// greetStudent("Paul");

// const printSum = () => {
//     console.log(10 + 10);
// }

// printSum();

// const printTriangle = () => {
//     console.log("#");
//     console.log("##");
//     console.log("###");
//     console.log("####");
//     console.log("#####");
    
//     //Below for loop not working producing NaN
//     // for (let i = 0; i <= 5; i++){
//     //     console.log(i * "#");
//     // }
// }

// printTriangle();

//////////////////
//Writing an arrow function with a parameter
//////////////////

// const sayName = (name) => {
//     console.log(`Hello! My name is ${name}`);
// }

// sayName("Frodo");

//////////////////
//Writing an arrow function with more than one parameter
//////////////////

// const calculateArea = (num1, num2) => {
//     console.log(num1 * num2);
// }

// calculateArea(10, 10);

////////////////
// Exercises
////////////////

// const minusOne = (num) => {
//     console.log(num - 1);
// }

// minusOne(10);
// minusOne(100);
// minusOne(Infinity);

// const makeSentence = (word1, word2, word3) => {
//     console.log(`Oh boy, do ${word1} ${word2} ${word3} or what?`)
// }

// makeSentence("I", "want", "pizza");


// // Extra

// // Write a function called getLastElement that takes a parameter arr.

// // Invoke the function with an array as the argument.

// // The function should print the last element within the array.
// const getLastElement = (arr) => {
//     console.log(arr[arr.length - 1]);
// }
// getLastElement([1, 2, 3, 4, 5, 6]);       // 6
// getLastElement(['a', 'b', 'c']);          // 'c'
// getLastElement([[1, 2, 3], [4, 5, 6]]);   // [4, 5, 6]

// Extra

// Write a function divideThreeNums that takes three parameters and prints the third parameter divided by the result of the second parameter divided by the first.

// const divideThreeNums = (num1, num2, num3) => {
//     console.log(num3 / (num2 / num1));
// }

// divideThreeNums(10, 5, 2)   // 4
// divideThreeNums(30, 2, 9)   // 135


//////////////////////////////////////////////////
//Write an arrow function with a return statement
//////////////////////////////////////////////////
// Functions can pass information back to whatever line of code invoked them.
// const ten = () => {
// 	return 10; // return will stop running the function. If there are lines of code after return then they will not run
// }

// console.log(8 + ten());
//console log will return 18 as the value

//Practice
// const reverseWord = (word) =>
// {
//     if (word)
// }


////////////////////////////////////
//AFTERNOON LAB
////////////////////////////////////

////////////////////
//Calculate Cube
////////////////////
// const calculateCube = (num) => {
//     return num**3;
// }

// console.log(calculateCube(5));

////////////////////
//Is a Vowel?
////////////////////
//  const isAVowel = (character) => {
//      if (character.length == 1 && character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
//          return true;
//      } else {
//          return false;
//      }
//  }

//  console.log(isAVowel("a"));


 ////////////////////
//Get Two Lengths
////////////////////

// const getTwoLengths = (string1, string2) => {
//     return [string1.length, string2.length];
// }

// console.log(getTwoLengths("Hank", "Hippopopalous"));


////////////////////
//Get Multiple Lengths
////////////////////
// const getMultipleLengths = (arr) => {
//     let newArray = [];
//     for (element of arr) {
//         let length = element.length;
//         newArray.push(length);
//     }
//     return newArray;
// }

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


/////////////////////
//Maximum of Three Numbers
/////////////////////

// const maxOfThree = (num1, num2, num3) => {
//     let newArray = [num1, num2, num3];
//     newArray.sort();
//     return newArray.pop();
// }

// console.log(maxOfThree(6, 9, 1));


/////////////////////
//Print Longest Word
/////////////////////

// const printLongestWord = (words) => {
//     let longestWord = "";
//     let length = 0;
//     for (let word of words) {
//         // console.log(word.length);
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         } 
//     }
//     return longestWord;
    
// }

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


//

/////////////////////
//Transmogrify
/////////////////////
// const transmogrify = (num1, num2, num3) => {
//     return ((num1 * num2)**num3);
// }

// console.log(transmogrify(5, 3, 2));


/////////////////////
//Project Euler Problem 2
/////////////////////


//NOT WORKING
// const projectEuler = (number) => {
//     let i = 1;
//     for (let j = i; j <= number; j += j) {
//         console.log(j);
//     }
// }

// projectEuler(50);





//Wildly Ravenous for Even More Afternoon
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]

//          function spiral (arr){
//             //let height = arr.length; //for testing
//             //let length = arr[0].length; //for testing //works assuming all rows same number of elements
//             let arrLength = arr.flat().length; //flatten the original arry and find the length of elements
//             const finalArr = []; //create new array which will store our results
//           //cycles through our functions and shrinks margins after complete cycle. 'finalArr.length<arrLengh' approximates the total cycles so there is a catch all in the rowNav/colNav functions that will skip adding stuff if the finalArr is complete
//           for (let marginShrink = 0; finalArr.length<arrLength; marginShrink++){
//             rowNav(arr, 1, marginShrink, marginShrink); //top row heading right
//             colNav(arr, 1, marginShrink+1, marginShrink); //right hand going down
//             rowNav(arr,-1, marginShrink+1, marginShrink); //bottom heading left
//             colNav(arr,-1, marginShrink+1, marginShrink+1); //left heading up
//           }
//             //funtion returns rows from original array. Uses startTrim and endTrim to skip beginning and end of rows
//             function rowNav(arr,direction, startTrim, endTrim) {
//                    if (finalArr.length==arrLength){ //if array is complete exit function
//                       return;
//                   } else if (direction == 1)  { //rightward direction. starts at row beginning (minus start trim) ends at row end(minus end trim)
//                   //finalArr.push("---->");
//                   for (i = startTrim;i < arr[startTrim].length-endTrim; i++) {
//                     finalArr.push(arr[startTrim][i]);
//                   }
//                  //finalArr.push("|");
//                } else if (direction == -1){ //leftward direction starts at row end (minus startTrim) ends at row beginning (minus endTrim);
//                  //finalArr.push("<----");
//                    for (i=arr[arr.length-1-endTrim].length-1-startTrim; i>=endTrim;i--){
//                        finalArr.push(arr[arr.length-1-endTrim][i]);
//                    }
//                  //finalArr.push("|");
//                }
//             }
//           //funtion returns columns from original array. Uses startTrim and endTrim to skip beginning and end of columns
//             function colNav(args, direction, startTrim, endTrim){
//                   if (finalArr.length==arrLength){ //if final array is complete exit function
//                       return;
//                    } else if (direction == 1){
//                // finalArr.push("v");
//                   for (i = startTrim; i < args.length-endTrim; i++){ //start at column top (minus startTrim) and work down (minus endTrmi);
//                       finalArr.push(args[i][args[i].length-1-endTrim]);
//                   }
//                // finalArr.push("|");
//               } else if (direction == -1) { //start at column bottom (minus startTrim) and work up (minus endTrim)
//                // finalArr.push("^");
//                        for (i = args.length-1-startTrim; i>=endTrim ;i--){
//                              finalArr.push(args[i][startTrim-1]);
//                        }
//                // finalArr.push("|");
//               }
//             }
//             return (finalArr);
//         }







//SECTION 1
// 1. The difference between interpolation and
// concatentation is...
//concatenation allows you to combine strings together using quotes and +  
//and interpolation allows you to use embedded expressions or 
//variables within the string (also called template literals). These are wrapped in 
//back ticks `` and use this format for expressions or variables ${expression}

//1. What does the acronym DRY stand for? Why should we pay attention to it? 
//What programming tools have we learned to write DRY code?
//DRY stands for Don't Repeat Yourself. We should pay attention to it because
//it allows you to write more concise code with less lines rather than repeating
//the same expression over and over again. While loops and for loops allow us to
//write DRY code

//2. What is the difference between const and let and var? 
//Please limit your answer to no more than three short sentences. 
//Don't be afraid to research using google and other resources
//const declares a variable that cannot be changed.
//let is block scoped 
//var is function scoped and is defined throught the program


//SECTION 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;

console.log(a < b);
console.log(c > b);
console.log('Name' === 'Name');
console.log(a < b < c);
console.log((a === a) < d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f != e);
let g = 0;
console.log(g);
g = b + c;
console.log(g);

//Did you use const, let or var? Why did you choose the one you chose?
//I used let because of the block scope. const wouldn't have allowed me to change the variable
//What happens if you don't use const , let or var? Do you get an error? If so what does it say?
//There was no error. 
//what happens if you write 10 = g?
//SyntaxError: Invalid left-hand side in assignment

//Bonus assignment
//a < (b || f) _ !f && e _ c

//SECTION 3
//Infinite Loop
//Is the code below an infinite loop? Why or why not?
// Yes it is an infinite loop because a string is always true, 
// the while true loop will continue indefinitely.
//Infinite Loop 2
//Infinite or not infinite? What is the expected output?
//This is not an inifite loop and throws an error as you cannot
//change a const variable

let letters = "A";
let i = 0;

// start a while loop that will run as long as i is less than 20
while (i < 20) {
    //concatenates the letters string "A" with another "A" string
    letters += "A";
    //increments the value of i by 1
	i++;
}
//prints the value of the concatenated letters variable after the while loop has completed
//it should print the concatenation of "A" 
console.log(letters);

//The code ran exactly as expected!

//SECTION 4
//A for loop performs the same operation as a while loop. 
//But what are the key differences, if any? What are the similarities?
// A for loop has a control panel that contains an initialization step,
// the boolean condition and the incrementor. A while loop uses the boolean 
//condition to run the code. The will both allow you to loop through a series of code
// using the DRY principal so lines of code are not repeated.

// What are the three components of the control panel? Each component is separated by a semicolon ;.

// Remember: Write your answers as comments in the file.

// The first part of the control panel is: initialization of the variable i
// The second part of the control panel is: boolean condition
// The third part of the control panel is: incrementor

// For loop II
for (let i = 0; i < 1000; i++) {
    console.log(i);
}

// Bonus Challenge (optional):
// What is the difference between \ (backslash, above the enter/return key) and 
// / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
// The backslash allows you to escape the quotes so you do not result in a syntax error 
//using single quotes that wrap a string that has single quotes as apostrophes within the string


//For loop in reverse
for (let i = 999; i >= 0; i--) {
    console.log(i);
}

//More counting
for (let i = 1; i <= 10; i++) {
    console.log('The value of i is: ' + i + ' of 10');
}

// Bonus Challenge (optional):
// Rewrite the above loop using String Interpolation/Template 
// Literals instead of concatenation
for (let i = 1; i <= 10; i++) {
    console.log(`The value of i is: ${i} of 10`);
}

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++) {
    console.log(StarWars[i]);
}

for (let i = 0; i < StarWars.length; i++) {
    console.log(`${i}. ${StarWars[i]}`);
}

for (let i = 1; i < StarWars.length; i+=2) {
    console.log(`${i}. ${StarWars[i]}`);
}









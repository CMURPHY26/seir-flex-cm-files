
//Errors
console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.log("and they're always glad you came.");
// TypeError: console.lo is not a function
console.log("You wanna be where you can see,");
// SyntaxError: missing ) after argument list
console.log("our troubles are all the same");
console.log("You wanna be where " + "everybody knows");
//SyntaxError: missing ) after argument list
console.log("Your name.");


//Boolean Expressions
/*
999 > 999 //false
999 == 999 //true
999 != 999 //false
-5 >= -4 //false
100 <= -100 //false
20 + 5 < 5 //false
81 / 9 == 9 //true
9 != 8 + 1 //false
*/

//The assignment operator assigns a value to a variable
//The equality operator checks if a value or variable is equal to another value or variable

//While Loops: reps and reps
let i = 1;
while (i <= 1000) {
    console.log('Ginger chocolate honey patties');
    i++;
}

let num = 0;
while (num <= 1000) {
    console.log(num);
    num++;
}

let counter = 0;
while (counter <= 1000) {
    console.log("Current loop number is: " + counter);
    counter++;
}

//For loops
for (i = 0; i <= 100; i++) {
    console.log(i);
}

for (i = 7; i <= 635; i++) {
    console.log(i);
}

let start = 0;
const limit = 100;

for (start; start <= limit; start++) {
    console.log(start);
}

let day = 1;
const daysInYear = 365; 
for (day; day <= daysInYear; day++) {
    console.log("The day is: " + day);
}

/*if (day == 365) {
    day = 1;

} 
*/


  /////////////////////////
 ////RECURSION
////////////////////////


// Let’s think about adding the following numbers

// 1 , 2, 3, 4, 5, 6, 7, 8 , 9 ,10

// Solving it by hand
// Average humans, do not add all the numbers all at once. We add two numbers together, store that number, and then add the next number, until we are left with one number. When we have one number, that is our answer.

// So we do:

// 1  + 2   = 3
// 3  + 3   = 6
// 6  + 4   = 10
// 10 + 5   = 15
// 15 + 6   = 21
// 21 + 7   = 28
// 28 + 8   = 36
// 36 + 9   = 45
// 45 + 10   = 55
// 55 + no numbers left means our answer is 55

// We can express this with a recursive function that follows our above pattern really easily

// First, since we have a list of numbers (our test case), let’s express them as an array
// Second, define a function
const numsToSum = [ 1 , 2, 3, 4, 5, 6, 7, 8 , 9 ,10 ];

console.log(numsToSum);

//Different ways to write functions

//this is function declaration which is hoisted and allows you to call the function before its declared because these are hoisted to the top
// function sumNumbers(numsArr) {
//     console.log("Function is running!");
// }

//Function expressions - these do not hoist
// const sumNumbers = function(numsArr) {
//     console.log("Function is running")
// }

const sumNumbers = ( numsArr, sum ) => {
    // console.log("Function is running!");
    
    sum = sum || 0;
    //Base case - condition to exit the recursive function(s)
    if(numsArr.length === 0) {
        return sum;
    }
    //The math to reduce down our answer:
    sum += numsArr.shift();

    return sumNumbers(numsArr, sum);
}

console.log(sumNumbers(numsToSum));
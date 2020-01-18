let sumOfEvens = 0;

for (let i = 0; i <= 10; i++) {
    // console.log(i);
    if (i % 2 === 0) {
        sumOfEvens += i;
        // console.log("Running total: " + sumOfEvens);
    }
}
console.log('The sum of the even numbers is: ' + sumOfEvens);

//FIZZBUZZ
for (let i = 0; i <= 100; i++) {
	if ((i % 3 === 0) && (i % 5 === 0)) {
		console.log("fizzbuzz");
	} else if (i % 3 === 0) {
		console.log('fizz');
	} else if (i % 5 === 0) {
		console.log("buzz");
	} else {
		console.log(i);
	}
}
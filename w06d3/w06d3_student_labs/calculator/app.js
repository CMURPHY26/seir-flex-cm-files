
const handleButtonClick= (event) => {
    console.log(typeof $(event.target).text());
}



$( () => {

    console.log("It's working!");

    $(".button").on("click", handleButtonClick);
    
});




// //CREATE function that stores clicked numbers
// const storeNumber = (event) => {
//     let num = $(event.target).text();
//     return Number(num);
// }

// //CREATE function to store operator
// const storeOperator = (event) => {
//     let operator = $(event.target).text();
//     return operator;
// }

// let num1;

// if(storeNumber(event)) {
//     num1 = storeNumber(event);
// }


// //CREATE function that concatenates number array & returns number
// const combineNumber = (numArr) => {
//     let combinedNumber;
//     for(let i = 0; i < numArr.length; i++) {
//         combinedNumber += i;
//     }
//     console.log( combinedNumber );
// }

// //CREATE function that adds two numbers
// const addNumbers = () => {
//     let num1 = storeNumber(event);

// }
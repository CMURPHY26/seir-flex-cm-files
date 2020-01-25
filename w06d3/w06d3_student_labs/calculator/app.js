
//////////////////////
////IRA Solution
/////////////////////
var firstNumber, secondNumber, operation;

$(() => {
    

    console.log("Javascript + jQuery has loaded");

    const handleButtonClick = event => {
        const buttonValue = $(event.target).text();
        const displayValue = $(".display").text();
        // console.log(typeof buttonValue);
        //console.log($(event.target).text());
        // console.log($(event.target).parent().attr("class"));
        //Find out if button is button-container or operations container
        //(Number or operator)
        const buttonType = $(event.target).parent().attr("class");

        if(buttonType === "button-container") {
            $(".display").text(`${displayValue}${buttonValue}`);
        } else {
            //if an operations button is clicked
            // console.log("operation button clicked");
            //detect which operation:
            //if($(event.target).attr("id") === "add");

            //another way
            if(buttonValue === "+") {
                console.log("Plus button clicked");
                operation = buttonValue;
                //Check if a firstNumber already exists
            //Ternary syntax:
            //    firstNumber ? alert("Number already defined") : (firstNumber = displayValue);
                if(firstNumber) {
                    alert("Number is already defined")
                } else{
                    firstNumber = Number(displayValue);
                    $(".display").text("");
                }
                
            } else if( buttonValue === "-") {
                console.log("Minus button clicked");
            } else if (buttonValue === "=") {
                //add, subtract, divide or multiply and return answer
                if(operation === "+") {
                    //grab the second number
                    secondNumber = Number(displayValue);
                    //sum the numbers and update the display
                    $(".display").text(firstNumber + secondNumber);
                }
            }
        }
        
        
        
    };



    // All your code goes here:
    $(".button").on("click", handleButtonClick);
  });






///////////////////////////
//////CHRIS CODE
//////////////////////////


// const ifNumber = (event) => {
//     if($(event.target).hasClass("number")) {
//         $(".display").append($(event.target).text());
//     }
// }

// const numArray = [];

// const ifOperator = (event) => {
//     if($(event.target).text()=== "+"){
//         numArray.push(Number($(".display").text()));
//         $(".display").empty();
//         ifNumber(event);
//         if(num1 >= 0) {
//         let num2 = Number($(".display").text());
//         console.log(num2);
//         }
//     }
// }


// const handleButtonClick= (event) => {
//     ifNumber(event);
//     ifOperator(event);
// }



// $( () => {

//     console.log("It's working!");

//     $(".button").on("click", handleButtonClick);
    
// });



///////////////////////
/////OLD CODE
//////////////////////
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
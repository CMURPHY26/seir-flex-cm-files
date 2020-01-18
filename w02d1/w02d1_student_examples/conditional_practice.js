// Chose an M&M
let isMMColorGreen = true;

//Decide what to do based on M&M color
if (isMMColorGreen) {
    console.log('Eiw! I am hurling this gross green M&M across the room.');
} else {
    console.log('Yum! M&Ms are so tasty!');
}

//////////////////////
// Party Code:
/////////////////////
//TODO: write this conditional

let isPartyTonight = false;
let miniGolfCoupon = false;
let saleAtTheMall = false;

// if theres a party tonight 
if (isPartyTonight) {
    console.log("I'm going to party like its 1999")
} else if (miniGolfCoupon){
    console.log('Hole in one! Woo!');
} else if (saleAtTheMall) {
    console.log('SALE time! Buy more save more');
} else {
    //catch all - if none of these are true
    console.log('I love eating cookies');
}

let lightsOn = true;
if (lightsOn) {
    console.log("Lights are on");
} else {
    console.log('Lights are off - its dark in here');
}

lightsOn = !lightsOn;


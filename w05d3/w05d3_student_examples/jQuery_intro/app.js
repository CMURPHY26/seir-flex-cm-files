/*
to load document before js runs:
$() object with function inside () => {}
$( () => {
  //code goes here
});

*/


$( () => {


if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};

console.log($);

//creat a div in jQuery
let $div = $('<div>');
console.log($div);

//Add the div at the end of the body
$("body").append($div);
//add class to it
$($div).addClass("meat");

//add meat inside of our div
const $h3 = $("<h3>").text("Ostrich");
$div.append($h3);


const $newDiv = $("<div>");
$("body").append($newDiv);
const $newH3 = $("<h3>").addClass("dairy").text("Deer");
$newDiv.append($newH3);

///target all divs on page
const $divs = $("div");
console.log($divs);

$divs.eq(2).hide();

console.log($divs.eq(0).children());


});
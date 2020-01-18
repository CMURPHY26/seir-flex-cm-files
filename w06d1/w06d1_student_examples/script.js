
const addH2 = () => {
	$h2 = $('<h2>').text("Just getting started");
	$('body').append($h2);
}

const changeH2 = () => {
	$('h2').text("Getting warmed up");
}




$(() => {
    addH2();
    setTimeout(() => {
      changeH2();
    }, 1000);
  });

//$(() => {}) this waits for the rest of the code to load
//before it runs what is inside
$(()=> {
    generateSquares(100);
})

//2 ways to create a function:
//Function Declaration and Function Expression
//generate squares is written as a function expression
//functions written this way must be defined before called
const generateSquares = (numOfSquares) => {
    for(let i = 1; i <= numOfSquares; i += 1){
        // console.log(i);
        const $square = $("<div>").addClass("square");
        $square.css("background-color", randColorRGB());
        $square.text(i);
        $square.attr('id', `square${i}`);
        $("body").append($square);
    }
}

//randColorRGB is written as a Function Declaration
//functions written this way are Hoisted when the file is initially read
//and thereby accessible anytime to be called
function randColorRGB() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // return "rgb(" + red + "," + green + "," + blue + ")";
    return `rgb(${red}, ${green}, ${blue})`;
}



$( () => {

console.log('It\'s working');

const $div = $("<div>").addClass("top-container");
const $div2 = $("<div>").addClass("bottom-container");
$("body").append($div);

$("body").append($div2);

const $h1 = $("<h1>").text("Trois couleurs: rouge, blanc, et blue");
$div.append($h1);

for(i = 0; i < 3; i ++){
    const $loopDiv = $("<div>").addClass("couleur");
    $($div).append($loopDiv);
}

$(".couleur").css("backgroundColor", "dimgrey");
$(".couleur").css("width", "200");
$(".couleur").css("height", "200");
$(".couleur").css("display", "inline-block");

const $divs = $("div");
$divs.eq(1).addClass("red").css("backgroundColor", "firebrick");
$divs.eq(2).addClass("white").css("backgroundColor", "ivory");
$divs.eq(3).addClass("blue").css("backgroundColor", "cornflowerblue");

const $newH1 = $("<h1>").text("Lumpy Space Princess");
$div2.append($newH1);

const img = $("<img>").attr('src', 'https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/fe/S5e18_PB_and_LSP.png/revision/latest?cb=20140318032436');

$div2.append(img);

$h1.text("Three colors: red, white and blue");

$divs.eq(2).addClass("white").css("backgroundColor", "black");
$divs.eq(3).addClass("blue").css("backgroundColor", "orange");

$("body").append($div);

$newH1.text("The Ice King");
img.attr('src', 'https://archive.nerdist.com/wp-content/uploads/2017/04/Adventure-Time-Featured-04072017.jpg')

$div.remove();

$div2.remove();

const p = $("<p>").text("the ice king waz here");
$("body").append(p);

});
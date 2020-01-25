console.log('shape clicker js file is connected');

//remember to set up your window onload!

let shapes = ["triangle", "circle", "square", "triangle-down", "octagon", "heart"];

// for(let i = 0; i < 3; i++) {
//     let $div = $("<div>").addClass("row");
//     $("body").append($div);
//     $("div").
// }

const changeShape = (event) => {
    let $currentShape = $(event.currentTarget);
    $currentShape.removeClass();
    $currentShape.addClass(shapes[1]);
    shapes.push(shapes[0]);
    shapes.shift(shapes[1]);
}

$(()=> {
    let $allShapes = $(".row").children();
    $allShapes.on("click", changeShape);
});
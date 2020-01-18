$( () => {
    console.log('It\'s working!')

    const $container = $("<div>").addClass("container");
    $container.css("max-width", "900px");
    $container.css("margin", "auto");
    $("body").append($container);

    

    const generateRow1 = () => {
        const $divRow = $("<div>").addClass("row");
        $container.append($divRow)
        for(let i = 1; i <= 8; i++){
            let $div = $("<div>").addClass("square");
            if(i % 2 === 0) {
                $div.addClass("black");
                $divRow.append($div);
            } else {
                $div.addClass("red")
                $divRow.append($div);
            }
        }

    }

    const generateRow2 = () => {
        const $divRow = $("<div>").addClass("row");
        $container.append($divRow)
        for(let i = 1; i <= 8; i++){
            let $div = $("<div>").addClass("square");
            if(i % 2 === 0) {
                $div.addClass("red");
                $divRow.append($div);
            } else {
                $div.addClass("black")
                $divRow.append($div);
            }
        }

    }

    const generateCheckerBoard = () => {
        for(let i = 0; i < 4; i++) {
            generateRow1();
            generateRow2();
        }

    }

    generateCheckerBoard();

});


    // const generateSquares = (numOfSquares) => {
    //     for(let i = 0; i < numOfSquares; i++){
    //         $div = $("<div>").addClass("square");

    //         if(i % 2 === 0) {
    //             $div.addClass("red");
    //             $container.append($div);
    //         } else {
    //             $div.addClass("black")
    //             $container.append($div);
    //         }
    //     }
    // }

    // generateSquares(64);
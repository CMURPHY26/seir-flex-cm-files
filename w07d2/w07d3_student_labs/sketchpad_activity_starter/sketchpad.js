let numberOfBoxes;

$(()=>{

   
    //CREATE variables for inputBox and submit (inputButton)
    let $inputBox = $("#inputBox");
    let $submit = $("#inputButton");

    const createBoxes = () => {
        for (var i = 0; i < numberOfBoxes; i++) {
            const square = $('<div class="square">')
                .appendTo('body')
                .on('mouseover', changeColor);
        }
    }

    //CREATE function to get the value in the input box
    const storeNumber = () => {
        console.log("submit clicked");
        console.log($inputBox.val());
        numberOfBoxes = Number($inputBox.val());
        
        createBoxes();
    }

    $submit.on("click", storeNumber);

    const changeColor = (e) =>{
        $(e.target).addClass('orange');
    }
    

});

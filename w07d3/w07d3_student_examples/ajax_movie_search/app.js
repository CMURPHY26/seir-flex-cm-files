
console.log("It works!")


$(() => {

    ///OLD syntax
    // $.ajax({
    //     url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen",
    //     success: (data) => {
    //         console.log(data);
    //     },
    //     error: () => {
    //         console.log("an error occurred")
    //     }
    // });


    // ///PROMISES - newer syntax
    // const promise = $.ajax({
    //     url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen"
    // });

    // promise.then((data) => {
    //         console.log(data);
    //     },
    //     () => {
    //         console.log("Something went wrong");
    //     }
    // )



    // ///PROMISE with dot chain then
    // const promise = $.ajax({
    //     url: "http://www.omdbapi.com/?apikey=53aa2cd6&t=inception"
    // }).then((data) => {
    //         console.log(data);
    //         $('#title').html(data.Title);
    //         $('#year').html(data.Year);
    //         $('#rated').html(data.Rated);

    //     },
    //     () => {
    //         console.log("Something went wrong");
    //     }
    // );

    $('form').on('submit', (event) => {
        event.preventDefault();
        
        const userInput = $('input[type="text"]').val();

        $.ajax({
            url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then((data) => {
            $('#title').html(data.Title);
            $('#year').html(data.Year);
            $('#rated').html(data.Rated);
        }), () => {
            console.log('bad request');
        }
    })



});
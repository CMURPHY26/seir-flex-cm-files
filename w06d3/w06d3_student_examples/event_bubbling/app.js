console.log('app.js');

$(() => {
  
    $(".outside").on("click", (event) => {
        console.log("OUTSIDE target is: ", event.target);
        console.log("OUTSIDE currentTarget is: ", event.currentTarget);
    });

    $(".inside").on("click", (event) => {
        console.log("INSIDE target is: ", event.target);
        console.log("INSIDE currentTarget is: ", event.currentTarget);
    });

    $("body").on("click", (event) => {
        console.log("BODY target is: ", event.target);
        console.log("BODY currentTarget is: ", event.currentTarget);
    });
  
});
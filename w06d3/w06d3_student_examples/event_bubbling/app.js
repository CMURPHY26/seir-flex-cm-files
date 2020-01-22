console.log('app.js');

$(() => {
  
    $(".outside").on("click", () => {
        console.log("OUTSIDE has been clicked");
    });

    $(".inside").on("click", () => {
        console.log("INSIDE has been clicked");
    })
  
});
console.log("it's working")

//show response function
const showResponse = event => {
    const $row = $(event.currentTarget).parent();
    $row.children().eq(2).show();
}

$(()=> {


    $("button").on("click", (event) => {
        event.preventDefault();
        // console.log($(event.target).text());
        // console.log(userInput);
        let borough = $(event.target).text();
        let userInput = $("#numOfComplaints").val();

        $.ajax({
            url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=" + borough,
            type: "GET",
            data: {
              "$limit" : userInput
            }
        }).then((data) => {
          console.log("Retrieved " + data.length + " records from the dataset!");
          console.log(data);
            for(let i = 0; i < data.length; i++) {
                console.log(data[i])
                let $row = $("<div>").addClass("row");
                let $div = $("<div>").addClass("incident").text(data[i].descriptor);
                let $divButton = $("<button>").addClass("police-response").text("What Did The Police Do?");
                $divButton.on("click", showResponse);
                let $response = $("<div>").addClass("response").text(data[i].resolution_description);
                $(".incidents-container").append($row);
                $row.append($div);
                $row.append($divButton);
                $row.append($response);
            }

        });
        
        // for(let i = 0; i < userInput; i++) {
        //     if()
        // }
        
        $("form").trigger("reset");
    })

});
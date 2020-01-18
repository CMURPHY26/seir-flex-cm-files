const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
  ];


$( () => {
    console.log('It\'s working', $);
      //come back and refactor to use Array.forEach()
    populateData();
    addData("Chris", "Long Island");


});


const populateData = () => {
    for (let i = 0; i < data.length; i += 1) {
        console.log(data[i]);

        //discuss BEM if time permits
        const $infoContainer = $("<div>").addClass("info-container");
        const $nameDiv = $('<div>').addClass('name').text(data[i].name);
        const $addressDiv = $("<div>").addClass('address').text(data[i].address);
        //This way
        // $infoContainer.append($nameDiv)
        // $infoContainer.append($addressDiv)
        //or
        // $infoContainer.append($nameDiv).append($addressDiv);
        //or
        $infoContainer.append($nameDiv, $addressDiv);
        $('body').append($infoContainer);
    }
}

const addData = (name, address) => {
    $('body').empty();
    data.push({name: name, address: address});
    populateData();
} 
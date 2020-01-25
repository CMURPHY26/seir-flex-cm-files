$(() => {
  const addColor = event => {
    const color = $(event.target).css("background-color");

    const $square = $("<div>");
    $square.addClass("square");
    // Or can do both in one line like this:
    // const $square = $("<div class=square>");

    // Give square the background color of the one user clicked on (event.target):
    $square.css("background-color", color);

    $myPalette.append($square);
  };

  const makePalette = () => {
    $colorPalette.empty();
    for (let i = 0; i < 5000; i++) {
      const $square = $("<div>");
      $square.addClass("square");
      // Generate a random hex number between 000000 and FFFFFF:
      // const randHex = '#' + Math.floor(Math.random() * 16777215).toString(16);
      // Or easier to understand when done as RGB values:
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      const randHex = "rgb(" + red + "," + green + "," + blue + ")";
      // Or with template literal syntax:
      // const randHex = `rgb(${red},${green},${blue})`;
      $square.css("background-color", randHex);
      $square.on("click", addColor);

      $colorPalette.append($square);
    }
  };

  const $colorPalette = $("#color-palette");
  const $myPalette = $("#my-palette");
  const $generate = $("#generate");

  $generate.on("click", makePalette);
});

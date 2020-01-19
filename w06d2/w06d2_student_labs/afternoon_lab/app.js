
const urls = [
  'https://opensource.org/files/osi_keyhole_100X100_90ppi.png',
  'https://www.astrazeneca.com/content/dam/az/Image%20Bank/New-homepage/Neuro_circular_icon.png/_jcr_content/renditions/xcq5dam.web.100.square.Neuro_circular_icon.png.pagespeed.ic.nQqEGld_nl.png',
  'http://www.materrassefm.com/images/100x100.gif',
  'http://www.crimsy.com/images/100x100.PNG',
  'http://geniussys.com/img/placeholder/blogpost-placeholder-100x100.png',
  'http://www.imagemagick.org/Usage/misc/interpolate_tri-mesh.jpg'
];


$( () => {
    //CREATE div for random image generator button
    const $randombutton = $("<div>").addClass("random-button").text("Add random Image");
    //APPEND div to Body
    $('body').append($randombutton);

    //FUNCTION to generate random image
    const randomImageGenerator = () => {
      //CREATE variable for random image and then use Math.floor(Math.Random() * array.length)
      let randomImageURL = urls[Math.floor(Math.random()*urls.length)];
      // console.log(randomImageURL);
      //CREATE variable to make new image tag with random url attribute
      let randomImage = $("<img>").attr("src", randomImageURL);
      //
      $("body").append(randomImage);
    }

    $randombutton.on('click', randomImageGenerator);

    


});
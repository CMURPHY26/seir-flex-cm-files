// console.log($);
// console.log('modal practice app.js is linked to this index.html');

$( () => {

  // Grabbing About the Game button
  const $openBtn = $("#openModal");
  // Grabbing modal element
  const $modal = $("#modal");
  // Grabbing close button
  const $closeBtn = $("#close");

//Create an event handler to display the modal. This needs to be placed above the listener.
  const openModal = () => {
    $modal.show();
  }

  //Add event listener to About the Game button
  $openBtn.on("click", openModal);

  // Create an event handler to close the modal.
  const closeModal = () => {
    $modal.hide()
  }
//Add event listener to Close button
  $closeBtn.on("click", closeModal)


});

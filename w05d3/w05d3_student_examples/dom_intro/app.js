console.log("stranger things are coming!");

document.querySelector("h1").innerText = "Welcome to the Upside Down!"
 
const image = document.querySelector("img");

// console.log(image);

image.style.filter = "grayscale(100%)";

const eggos = document.createElement("img");

document.querySelector(".container").appendChild(eggos);

eggos.setAttribute("src", "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg");

const bullet = document.querySelectorAll("li");
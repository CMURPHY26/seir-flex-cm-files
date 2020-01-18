console.log("It's working!");

const featuring = document.querySelector("#featuring");

console.log(featuring);

const h2 = document.querySelector("h2");
console.log(h2);

h2.innerText = "Welcome to Commack!!!";

const featuringElements = document.querySelectorAll(".list");

console.log(featuringElements);

document.querySelectorAll("li")[0].style.color = "blue";

document.querySelectorAll("li")[1].innerText = "Jamboree sandwich at the Jambo-ree";

const img = document.createElement("img");

img.setAttribute("src", "https://www-tangeroutlets.azureedge.net/images/centermedia/deerpark/3036/2?v=130466522505400000");

document.querySelector(".container").appendChild(img);


const listArray = document.querySelectorAll("li");
for(let i = 0; i < listArray.length; i++) {
listArray[i].style.color = "green";
}

// img.remove();
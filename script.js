var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rtnButton = document.getElementById("rtnButton");
var prevColours = body.style.background;
console.log(prevColours);

console.log(String(body.style.background)+ ";");
function displayCSS() {
  // l
}

function setGradient() {
  body.style.background = "linear-gradient(to right, "+color1.value +", "+ color2.value +")";

  css.textContent = body.style.background + ";";
}

function rtnToPrevBgrnd() {
  body.style.background = prevColours;
  css.textContent = body.style.background + ";";
}

displayCSS();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rtnButton.addEventListener("click", rtnToPrevBgrnd);

let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");

setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + ", "
    + color2.value + ")";
    
    css.textContent = body.style.background;
}

function random() {
    return '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
}

function randomGradient() {
    color1.value = random();
    color2.value = random();
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomGradient);
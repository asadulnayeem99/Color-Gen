//Global
let div = null;

window.onload = () => {
  main();
};
// Boot function
function main() {

  const genretRandomColor = document.getElementById("generate-random-color");
  genretRandomColor.addEventListener("click", genretRandomColorBtn);



}
//Dom Functions

function generateToast(msg) {
  div = document.createElement("div");
  div.innerHTML = msg;
  div.className = "toast-message toast-message-slide-in";
  document.body.appendChild(div);
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
      div = null;
    });
  });
  document.body.appendChild(div);
}
function updateColorCodeToDom(color) {
  const hexColor = generetRGBcolor(color);
  const rgbColor = genretRgb(color);
  document.getElementById("color-display").style.backgroundColor = hexColor;
  document.getElementById("color-mode-hex").value = hexColor;
  document.getElementById("color-mode-rgb").value = rgbColor;
  document.getElementById("color-slider-red").value = color.red;
  document.getElementById("color-slider-red-label").innerText = color.red;
  document.getElementById("color-slider-green").value = color.green;
  document.getElementById("color-slider-green-label").innerText = color.green;
  document.getElementById("color-slider-blue").value = color.blue;
  document.getElementById("color-slider-blue-label").innerText = color.blue;
}

//Event Handlers
function genretRandomColorBtn() {
    const color = genretColorDecimal();
    updateColorCodeToDom(color);
  }
//utils

/**
 * genret and return an object of three decimal values
 * color object of three decimal values
 * @param {object} color
 * @returns  {string}
 */

function generetRGBcolor({ red, green, blue }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

function genretColorDecimal() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return {
    red,
    green,
    blue,
  };
}

/**
 *
 * @param {object} color
 * @returns
 */

function genretRgb({ red, green, blue }) {
  return `rgb(${red},${green},${blue})`;
}

/**
 * @param {String} color: ;
 */
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

// hexTo rgb
/** @param {string} hex  */
function hexToDecimal(hex) {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);
  return {
    red,
    green,
    blue,
  };
}


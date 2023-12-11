let div = null;
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const input = document.getElementById("output");
  const input2 = document.getElementById("output2");
  const copy_btn = document.getElementById("copy-btn");

  btn.addEventListener("click", function () {
    const color = genretColorDecimal();
    const hex = generetRGBcolor(color);
    const bgRgb = genretRgb(color);
    input2.value = bgRgb;
    root.style.backgroundColor = hex;
    input.value = hex.substring(1);
  });
  copy_btn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${input.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    if (isValidHex(output.value)) {
      generateToast(`#${output.value} copied`);
    } else {
      alert("Invalid Hexa Color Code");
    }
  });
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
    }
    if (color && isValidHex(color)) {
      root.style.backgroundColor = `#${color}`;
    }
  });
}

// function 2 - generet hex color code

function generetRGBcolor({ red, green, blue }) {
  const getTwoCode = (value) => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

//function 1 - generet three random decimal number for rgb
// return as object
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

function genretRgb({ red, green, blue }) {
  return `rgb(${red},${green},${blue})`;
}

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
}

/**
 * @param {String} color: ;
 */
function isValidHex(color) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

let div = null;
window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const input = document.getElementById("output");
  const copy_btn = document.getElementById("copy-btn");

  btn.addEventListener("click", function () {
    const bg = generetRGBcolor();
    root.style.backgroundColor = bg;
    // input.value = bg;
    input.value = bg.substring(1);
    // copy_btn.innerHTML = "Copy";
  });
  copy_btn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${input.value}`);
    if (div !== null) {
      div.remove();
      div = null;
    }
    // copy_btn.innerHTML = "Copied To Clipboard";
    if (isValidHex(output.value)) {
      generateToast(`#${output.value} copied`);
    } else {
      alert("Invalid Hexa Color Code");
    }
  });
  output.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if(color){
      output.value = color.toUpperCase();
    }
    if (color && isValidHex(color)) {
      root.style.backgroundColor = `#${color}`;
    }
  });
}
function generetRGBcolor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
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
  // if (color[0] !== "#") return false;
  // color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}

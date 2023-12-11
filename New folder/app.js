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
    input.value = bg;
    copy_btn.innerHTML = "Copy";
  });
  copy_btn.addEventListener("click", function () {
    navigator.clipboard.writeText(input.value);
    if (div !== null) {
      div.remove();
      div = null;
    }
    // copy_btn.innerHTML = "Copied To Clipboard";
    generateToast(`${output.value} copied`);
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

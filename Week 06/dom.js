function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

const themeBtn = document.getElementById("theme-button");

themeBtn.addEventListener("click", function () {
  let currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor === "white") {
    changeBackgroundColor("black");
  } else {
    changeBackgroundColor("white");
  }
});

let box = document.querySelector("div.box");
let colors = ["red", "yellow", "blue", "green"];
let curColor = 0;

const colorSwitcher = () => {
  box.style.borderColor = colors[curColor];
  if (curColor >= colors.length - 1) {
    curColor = 0;
  } else {
    curColor += 1;
  }
};

setInterval(colorSwitcher, 3000);

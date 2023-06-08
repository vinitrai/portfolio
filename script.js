console.log("connected");

const skillBars = document.querySelectorAll(".skills__percentage");
const themeInputs = Array.from(
  document.querySelectorAll('input[name="color-choice"]')
);
const root = document.documentElement;
const modeToggler = document.querySelector(".mode__toggler");
const control = document.querySelector(".theme__toggler");

const themePicker = [
  {
    options: "color-1",
    colors: ["hsl(252, 35%, 5%)", "hsl(252, 25%, 51%)", "hsl(252, 100%, 83%)"],
  },

  {
    options: "color-2",
    colors: ["hsl(351, 85%, 51%)", "hsl(351, 75%, 51%)", "hsl(351, 100%, 83%)"],
  },
  {
    options: "color-3",
    colors: ["hsl(271, 76%, 53%)", "hsl(271, 60%, 53%)", "hsl(271, 100%, 83%)"],
  },

  {
    options: "color-4",
    colors: ["hsl(225, 73%, 57%)", "hsl(225, 63%, 57%)", "hsl(225, 100%, 83%)"],
  },
  {
    options: "color-5",
    colors: ["hsl(43, 74%, 49%)", "hsl(43, 64%, 49%)", "hsl(43, 100%, 83%)"],
  },
  {
    options: "color-6",
    colors: ["hsl(339, 81%, 66%)", "hsl(339, 71%, 66%)", "hsl(339, 100%, 83%)"],
  },

  {
    options: "color-7",
    colors: ["hsl(80, 61%, 50%)", "hsl(80, 51%, 50%)", "hsl(80, 100%, 83%)"],
  },
  {
    options: "color-8",
    colors: ["hsl(19, 96%, 52%)", "hsl(19, 86%, 52%)", "hsl(19, 100%, 83%)"],
  },
  {
    options: "color-9",
    colors: ["hsl(88, 65%, 43%)", "hsl(88, 55%, 43%)", "hsl(88, 100%, 83%)"],
  },
  {
    options: "color-10",
    colors: ["hsl(42, 100%, 50%)", "hsl(42, 85%, 50%)", "hsl(42, 100%, 83%)"],
  },
];

//add percentage to skills bars
[...skillBars].forEach((skill) => {
  const percent = skill.dataset.percentage;
  skill.style.flex = `1 1 ${percent}%`;
});

//show or hide colors
control.addEventListener("click", function () {
  const mainToggler = document.querySelector(".style__switcher");
  mainToggler.classList.toggle("removeTransform");
});
//change mode
modeToggler.addEventListener("click", function (e) {
  const child = [...e.target.children];
  root.classList.toggle("light");
  if (child[0].classList.contains("hide")) {
    child[0].classList.remove("hide");
    child[1].classList.add("hide");
  } else if (child[1].classList.contains("hide")) {
    child[1].classList.remove("hide");
    child[0].classList.add("hide");
  }
});

//change theme
themeInputs.forEach((input) => {
  input.addEventListener("click", function () {
    const selectedColor = this.id;
    const userColor = themePicker.find(
      (theme) => theme.options === selectedColor
    );
    console.log(userColor);
    setTheme(userColor.colors);
  });
});

//set Theme
function setTheme(color) {
  root.style.setProperty("--accent-color", color[0]);
  root.style.setProperty("-accent-color-dark", color[1]);
  root.style.setProperty("--accent-color-light", color[2]);
}
//hide show nav
const navToggler = document.querySelector(".nav__menu");
navToggler.addEventListener("click", function () {
  const ul = document.querySelector(".nav__items");
  ul.classList.toggle("show-nav");
});

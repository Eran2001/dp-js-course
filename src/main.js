import "./style.css";

const value = document.querySelector("#value");
const box = document.querySelector(".box");
const color = document.querySelector("#clr");

value.addEventListener("change", () => {
  box.style.width = `${value.value}px`;
});

color.addEventListener("change", () => {
  box.style.backgroundColor = color.value;
});

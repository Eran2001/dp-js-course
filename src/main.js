import "./style.css";

const value = document.querySelector("#value");
const box = document.querySelector(".box");

value.addEventListener("change", () => {
  box.style.width = `${value.value}px`;
});

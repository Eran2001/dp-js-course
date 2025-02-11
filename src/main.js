import "./style.css";

let count = 0;

const IncCount = () => {
  count++;
  document.querySelector(".count").textContent = count;
};

const DicCount = () => {
  count--;
  document.querySelector(".count").textContent = count;
};

window.IncCount = IncCount;
window.DicCount = DicCount;

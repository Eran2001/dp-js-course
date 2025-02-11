import "./style.css";

let count = 0;

const setCount = () => {
  count++;
  document.querySelector(".count").textContent = count;
};

window.setCount = setCount;

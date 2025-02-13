import "./style.css";

const btn = document.querySelector("button");
const h2 = document.querySelector("h2");

const myFunc = () => {
  setTimeout(() => {
    h2.innerHTML = "Clicked";
  }, 2000);
};

window.myFunc = myFunc;

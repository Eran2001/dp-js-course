import "./style.css";

let myHead = document.querySelector(".myHead");

const myFunc = () => {
  myHead.addEventListener("mouseover", () => {
    myHead.style.color = "red";
  });

  myHead.addEventListener("mouseout", () => {
    myHead.style.color = "";
  });
};

window.myFunc = myFunc;

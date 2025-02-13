import "./style.css";

let btnDark = document.getElementById("dark");
let btnLight = document.getElementById("light");

const addDarkClassFunc = () => {
  let myClass = document.querySelector("html");
  myClass.classList.add("myDarkClass");
};

const addLightClassFunc = () => {
  let myClass = document.querySelector("html");
  myClass.classList.add("myLightClass");
};

btnDark.addEventListener("click", addDarkClassFunc);
btnLight.addEventListener("click", addLightClassFunc);

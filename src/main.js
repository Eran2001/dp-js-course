import "./style.css";

let btnDark = document.getElementById("dark");
let btnLight = document.getElementById("light");

const addDarkClassFunc = () => {
  let myClass = document.querySelector("html");
  myClass.classList.add("myDarkClass");
  myClass.classList.remove("myLightClass");
};

const addLightClassFunc = () => {
  let myClass = document.querySelector("html");
  myClass.classList.add("myLightClass");
  myClass.classList.remove("myDarkClass");
};

btnDark.addEventListener("click", addDarkClassFunc);
btnLight.addEventListener("click", addLightClassFunc);

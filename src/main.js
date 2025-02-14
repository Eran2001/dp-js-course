import "./style.css";

localStorage.setItem("myData", "Eran");
// localStorage.removeItem("myData");

const name = localStorage.getItem("myData");
console.log(name);

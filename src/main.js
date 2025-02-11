import "./style.css";

const myLst = ["Apple", "Orange", "Banana", "Grapes"];

const myDiv = document.createElement("div");
myDiv.innerHTML = myLst.join(", ");
document.body.appendChild(myDiv);

import "./style.css";

let mainList = document.querySelector("ul");
let listItem = document.createElement("li");
let text = document.createTextNode("Apple");
mainList.appendChild(listItem);
listItem.appendChild(text);

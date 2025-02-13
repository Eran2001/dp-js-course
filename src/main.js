import "./style.css";

const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  let mainList = document.querySelector("ul");

  let listItem = document.createElement("li");

  let fruitText = document.createTextNode(fruits[i]);

  mainList.appendChild(listItem);

  listItem.appendChild(fruitText);
}

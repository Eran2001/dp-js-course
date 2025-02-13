import "./style.css";

const fruits = ["Apple", "Banana", "Orange"];

if (fruits.length === 0) {
  let header = document.createElement("h3");
  header.textContent = "Nothing";
  document.body.appendChild(header);
}

let i = 0;

while (i < fruits.length) {
  let mainList = document.querySelector("ul");

  let listItem = document.createElement("li");

  let fruitText = document.createTextNode(fruits[i]);

  mainList.appendChild(listItem);

  listItem.appendChild(fruitText);
  i++;
}

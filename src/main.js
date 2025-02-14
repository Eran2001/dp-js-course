import "./style.css";

const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach((fruit) => {
  const listItem = document.createElement("li");
  const ul = document.querySelector("ul");
  listItem.textContent = fruit;
  ul.appendChild(listItem);
});

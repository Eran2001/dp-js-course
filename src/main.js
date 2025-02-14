import "./style.css";

const fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => {
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  document.body.appendChild(listItem);
});

import "./style.css";

let myList = {
  name: "Era",
  age: 24,
};

const { ...newList } = myList;
console.log(newList.name);

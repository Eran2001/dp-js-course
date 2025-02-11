import "./style.css";

let myList = {
  name: "Era",
  age: 24,
};

delete myList.age;

let { ...newList } = myList;
console.log(newList.age);

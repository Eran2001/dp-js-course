import "./style.css";

let myHeading = document.createElement("h1");

const greet = (name) => {
  myHeading.textContent = `Hello, ${name}`;
  document.body.appendChild(myHeading);
};

const userInput = (callback) => {
  let name = prompt("Enter your name: ");
  if (!name) {
    alert("Please enter a valid name!");
  }
  callback((name = "User"));
};

userInput(greet);

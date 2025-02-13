import "./style.css";

let myList = document.querySelector(".myList");

const getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const json = await response.json();

    json.forEach((post) => {
      const listItem = document.createElement("li");
      listItem.textContent = post.title;
      myList.appendChild(listItem);
    });
  } catch (error) {
    console.error("Error fetching data", error);
  }
};

window.getData = getData;

let myHeading = document.createElement("h1");

const greet = (name) => {
  myHeading.textContent = name;
  document.body.appendChild(myHeading);
};

const userInput = (callback) => {
  let name = prompt("Enter your name: ");
  callback(name);
};

userInput(greet);

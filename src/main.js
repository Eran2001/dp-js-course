import "./style.css";

const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    let myList = document.createElement("li");
    myList.textContent = JSON.stringify(json);

    document.body.appendChild(myList);
  })
  .catch((error) => {
    console.error("Error Fetching data", error);
  });

import "./style.css";

let color = document.getElementById("color");
let heading = document.querySelector(".myHead");

color.addEventListener("click", () => {
  heading.classList.add("color");
});

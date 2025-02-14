import "./style.css";

let heading = document.querySelector(".myHead");

let color = document.getElementById("color");
let animate = document.getElementById("animate");
let hidden = document.getElementById("hidden");

// change color
color.addEventListener("click", () => {
  heading.classList.toggle("color");
});

// add animation
animate.addEventListener("click", () => {
  heading.classList.toggle("animate");
});

// hidden
hidden.addEventListener("click", () => {
  heading.classList.toggle("hidden");
});

import "./style.css";

const count = document.querySelector(".head");
count.addEventListener("click", myFunction);

function myFunction() {
  count.textContent = "Bye!";
}

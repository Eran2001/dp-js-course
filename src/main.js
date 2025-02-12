import "./style.css";

let myList = {
  name: "Era",
  age: 24,
};

console.log(myList);

window.addEventListener("scroll", function () {
  const scrollBar = document.querySelector(".scroll");
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  scrollBar.style.width = scrollPercent + "%";
});

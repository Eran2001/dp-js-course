import "./style.css";

const heading = document.querySelector(".heading");
heading.style.color = "#ff1";

const h2 = document.createElement("h2");
h2.textContent = "Eran Hasareli";
document.body.appendChild(h2);

h2.id = "myH2";
h2.className = "myH2";
console.log(h2);

const all = document.querySelector(".heading");
console.log(all);

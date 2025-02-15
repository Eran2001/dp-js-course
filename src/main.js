import "./style.css";

const name = document.getElementById("name");
const login = document.getElementById("login");

login.addEventListener("click", () => {
  localStorage.setItem("user_name", name.value);
  console.log("user name created");
});

const h2 = document.getElementById("h2");
h2.textContent = localStorage.getItem("user_name");

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("user_name");
  console.log("user name removed");
});

import "./style.css";

const name = document.getElementById("name");
const login = document.getElementById("login");
const h2 = document.getElementById("h2");

// function to display user name dynamically
function updateName() {
  const storedName = localStorage.getItem("user_name");
  if (storedName) {
    h2.textContent = `Welcome, ${storedName}!`;
  }
}

//function to remove name dynamically

login.addEventListener("click", () => {
  localStorage.setItem("user_name", name.value);
  console.log("user name created");
  updateName();
});

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("user_name");
  console.log("user name removed");
});

updateName();

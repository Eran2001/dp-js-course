import "./style.css";

const showAlert = () => {
  alert("This is a alert!");
};

const showPrompt = () => {
  let name = prompt("Enter your name: ");
  let nameHeading = document.createElement("h1");
  nameHeading.textContent = name;
  document.body.appendChild(nameHeading);
};

const showConfirm = () => {
  confirm("Are you sure?");
};

window.showAlert = showAlert;
window.showPrompt = showPrompt;
window.showConfirm = showConfirm;

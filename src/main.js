import "./style.css";

const showAlert = () => {
  alert("This is a alert!");
};

const showPrompt = () => {
  prompt("Enter your name: ");
};

const showConfirm = () => {
  confirm("Are you sure?");
};

window.showAlert = showAlert;
window.showPrompt = showPrompt;
window.showConfirm = showConfirm;

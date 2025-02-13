import "./style.css";

export default function ageInput() {
  let age = document.querySelector("#age").value;
  console.log(age);
}

window.ageInput = ageInput;

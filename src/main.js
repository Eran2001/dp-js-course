import "./style.css";

const ageInput = () => {
  let age = document.querySelector("#age").value;
  if (!age) {
    alert("Age is Required!");
    return;
  }

  let ageHeader = document.createElement("h1");
  ageHeader.textContent = age;
  document.body.appendChild(ageHeader);
};

window.ageInput = ageInput;

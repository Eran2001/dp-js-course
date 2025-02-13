import "./style.css";

const ageInput = () => {
  let age = document.querySelector("#age").value;

  if (!age || isNaN(age)) {
    alert("Please enter a valid age.");
    return;
  }

  age = parseInt(age);

  const ageHeader = document.createElement("h1");
  ageHeader.textContent = `Age: ${age}`;

  const previousHeader = document.querySelector("h1");
  if (previousHeader) {
    previousHeader.remove();
  }

  if (age >= 18) {
    ageHeader.style.color = "red";
  } else {
    ageHeader.style.color = "blue";
  }

  document.body.appendChild(ageHeader);
};

window.ageInput = ageInput;

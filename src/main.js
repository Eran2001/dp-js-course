import "./style.css";

const ageInput = () => {
  let age = document.querySelector("#age").value;
  if (!age) {
    alert("Age is Required!");
    return;
  } else if (age >= 18) {
    let ageHeader = document.createElement("h1");
    ageHeader.textContent = age;
    document.body.appendChild(ageHeader);
    ageHeader.style.color = "red";
  } else {
    let ageHeader = document.createElement("h1");
    ageHeader.textContent = age;
    document.body.appendChild(ageHeader);
    ageHeader.style.color = "blue";
  }
};

window.ageInput = ageInput;

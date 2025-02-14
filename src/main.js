import "./style.css";

const total = () => {
  let a = prompt("a: "); // base
  let b = prompt("b: "); // 90
  let c = prompt("c: "); // big

  if (!a) {
    const total = `${c * c - b * b}`;
    console.log("c2 = a2 + b2");
    console.log("a2 = c2 - b2");
    console.log(`a2 = ${c * c} - ${b * b}`);
    console.log(`a2 = ${total}`);
    let newTotal = Math.sqrt(total);
    console.log(`a = ${newTotal}`);
  }
};

total();

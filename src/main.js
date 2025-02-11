import "./style.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    alert(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Era", 24);
console.log(p1.greet());

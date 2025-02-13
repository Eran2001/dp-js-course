import "./style.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    function greet() {
      console.log(`Hello, ${name}`);
    }

    greet();
  }
}

const person1 = new Person("Era", 24);
person1.greet;

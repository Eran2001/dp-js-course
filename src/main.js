import "./style.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = () => console.log(`Hello, ${name}`);
  }
}

const person1 = new Person("Era", 24);
person1.greet();

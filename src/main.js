import "./style.css";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.greet = () => console.log(`Hello, ${name}`);
  }
}

class Child extends Person {
  constructor(school) {
    super(school);
    this.school = school;
  }
}

const person1 = new Person("Era", 24);
const person2 = new Person("Hasa", 23);
person1.greet();

person2.sayHello = () => {
  console.log("Hello person 2");
};

Person.prototype.sayHello = function () {
  console.log(`Hello, ${this.name}`);
};

person2.sayHello();
person1.sayHello();

const child1 = new Child("Chan", 23, "PCC");
console.log(child1.school);

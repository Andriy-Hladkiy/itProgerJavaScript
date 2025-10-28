class Person {
  constructor(name, age, happiness) {
    this.name = name;
    this.age = age;
    this.happiness = happiness;
  }
  info() {
    console.log("Person: " + this.name + ". age: " + this.age);
  }
}

var alex = new Person("Alex", 45, true);
var bob = new Person("Bob", 25, false);
// console.log(alex.name);
// console.log(bob.name);

alex.info();
bob.info();

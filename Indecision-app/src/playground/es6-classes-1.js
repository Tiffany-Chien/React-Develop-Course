class Person {
  constructor(name, age) {
    // Access to function default
    this.name = name || "test";
    this.age = age;
  }
  getGreeting() {
    // return "Hi I am " + this.name;
    return `Hi I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += `I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const me = new Traveler("Andrew Mead", 26, "CS");
console.log(me.getDescription());

// It's overwritten
const other = new Traveler(undefined, undefined, "nowhere");
console.log(other.getDescription());

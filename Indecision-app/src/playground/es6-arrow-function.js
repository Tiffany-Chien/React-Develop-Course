const square = function (x) {
  return x * x;
};

console.log(square(8));

// Argument
// const squareArrow = (x) => {
//   return x * x;
// };

// If we just want to return sth
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstName = (name) => name.split(" ")[0];

// part 2

// argument is no longer bound with arrow function
const add = (a, b) => {
  // will get an error
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1000));

// 'this' keyword is no longer bound as well
const user = {
  name: "Andrew",
  city: ["Phili", "New York"],
  // new syntax
  printPlacesLived() {
    const cityMessaeges = this.city.map((city) => {
      return city + "!";
    });
    return cityMessaeges;

    this.city.forEach(function (city) {
      // will crash here
      // this.name is only accessible on top, but not accessible in
      // this function -> we have to create a variable to store this and access it
      // console.log(this.name + " has lived in " + city);
    });
    // it will work if we switch to an arrow function
    // this.city.forEach((city) => {
    //   console.log(this.name + " has lived in " + city);
    // });
  },
};
console.log(user.printPlacesLived());

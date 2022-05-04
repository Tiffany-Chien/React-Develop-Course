var nameVar = "Andrew";
// with var varaibles, you can make a new var with the same variable name
var nameVar = "Mike";
console.log("nameVar", nameVar);

// You can reassigne but not redefine it
let nameLet = "Jen";
console.log("nameLet", nameLet);

// You cannot reassign and redefine const
const nameConst = "Frank";
console.log("nameConst", nameConst);

// ================ Block Scoping ================

var fullName = "Andrew Mead";
// let firstName;
if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName); // Andrew -> var are not block level scoped

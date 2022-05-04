// You cannot render the object (React doesn't know what are you doing with it)
const user = {
  name: "Tiffany",
  age: 26,
  location: "California",
};

function getLocation(location) {
  if (location) {
    // We can simply modify the function to return a JSX expression
    return <p>Location {location}</p>;
  }
  return undefined;
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {/* Logical operator */}
    {user.age >= 18 && <p>Age: {user.age}</p>}
    {/* {} is for javascript expression not for if statements */}
    <p>Location: {getLocation(user.location)}</p>
    {/* Type JSX expressions, we can return JSXs in functions */}
    {getLocation(user.location)}
  </div>
);

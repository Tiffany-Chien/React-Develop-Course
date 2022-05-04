console.log("App is running");

// adjacent JSX element must be wrapped in an enclosing tag
// can only have a single root element -> wrap with div
const app = {
  title: "Indecision App",
  subtitle: "This is the subtitle",
  options: ["One", "Two"],
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? "Here are your options" : "No options"}
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const addOne = () => {
  console.log("addOne");
};

const minusOne = () => {
  console.log("minusOne");
};

const reset = () => {
  console.log("reset");
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    {/* Attributes, class is called className in JSX */}
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);

console.log(templateTwo);

const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

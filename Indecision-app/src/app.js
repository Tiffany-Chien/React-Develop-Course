console.log("App is running");

// adjacent JSX element must be wrapped in an enclosing tag
// can only have a single root element -> wrap with div
const app = {
  title: "Indecision App",
  subtitle: "This is the subtitle",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault(); // Stop full page refresh
  // get the option we just inputted
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    // wipe the input
    e.target.elements.option.value = "";
  }
  // each time submit we want to rerender
  render();
};

const removeAllOptions = () => {
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAllOptions}>Remove all</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      {/* We only want to reference the function variable not to call the funtion
      If we typed "onFormSubmit()" then onSubmit will focus on the return value in the event handler
      in this case it's undefined*/}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

render();

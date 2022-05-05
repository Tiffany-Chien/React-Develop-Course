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

const onMakeDecision = () => {
  // randomly select all of the number of our options
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={removeAllOptions}>Remove all</button>
      <ol>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })}
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

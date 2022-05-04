let count = 0;
const addOne = () => {
  count++;
  console.log("addOne", count);
  // call each time to rerender
  renderCounterApp();
};

const minusOne = () => {
  console.log("minusOne");
  count--;
  renderCounterApp();
};

const reset = () => {
  console.log("reset");
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

// JSX does not have built in data-binding
// everything hasn't render after the ReactDOM.render();
// that's why every time we call render counter app we call this to rerender
const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      {/* Attributes, class is called className in JSX */}
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

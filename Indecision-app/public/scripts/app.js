"use strict";

console.log("App is running");

// adjacent JSX element must be wrapped in an enclosing tag
// can only have a single root element -> wrap with div
var app = {
  title: "Indecision App",
  subtitle: "This is the subtitle",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); // Stop full page refresh
  // get the option we just inputted
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    // wipe the input
    e.target.elements.option.value = "";
  }
  // each time submit we want to rerender
  render();
};

var removeAllOptions = function removeAllOptions() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  // randomly select all of the number of our options
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      "What should I do?"
    ),
    React.createElement(
      "button",
      { onClick: removeAllOptions },
      "Remove all"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  var appRoot = document.getElementById("app");
  ReactDOM.render(template, appRoot);
};

render();

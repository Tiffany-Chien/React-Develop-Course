// React enforces the upper case letter
class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";
    const options = ["Thing one", "Thing two", "Thing four"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  // React components has to have a render()
  render() {
    // 'this' is the reference to the current component
    // 'this.props' -> object key value pair
    // console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {/* Render the options array length */}
        This is the length of the options array: {this.props.options.length}
        {/* Render a new p tag to each options */}
        {/* key is not going to pass down below to <Option /> because key is a reserved name */}
        {/* So we have to pass down another option prop */}
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Add option components here</p>
      </div>
    );
  }
}

// ReactDOM is going to render <IndecisionApp />
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

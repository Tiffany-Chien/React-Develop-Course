// React enforces the upper case letter
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    // define default state
    this.state = {
      options: [],
    };
  }
  // pass function against the data flow
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  handlePick() {
    const i = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[i]);
  }

  // to pass the data upstream
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      // already in array
      return "This option already exists";
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option),
      };
    });
  }

  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }
  // Grab the event
  handleAddOption(e) {
    // Prevent default form submission
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    // update the error state
    this.setState(() => {
      return {
        // setting error
        error,
      };
    });
  }
  render() {
    return (
      <div>
        {/* onSubmit is with form */}
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>

        <p>Add option components here</p>
      </div>
    );
  }
}

// ReactDOM is going to render <IndecisionApp />
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

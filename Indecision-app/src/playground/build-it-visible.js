console.log("App is running");

class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = { visibility: false };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {/* If it's visible we want to render some random <p>*/}
        {this.state.visibility && <p> SHOWING DETAILS </p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));

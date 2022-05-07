class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    // State we want to check (the default state)
    this.state = {
      count: 0,
    };
  }

  handleAddOne() {
    // "this.state.count += 1" will not update the state
    // this.state.count += 1;
    // instead we need to use: setState(function) to manipulate the state object
    this.setState((prevState) => {
      // Define the state we want to change
      return {
        // get the previous of the argument
        // Every time we change the state, the browser update the state
        count: prevState.count + 1,
      };
    });
  }

  handleMinusOne() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
    // React will trying to do thiese together, and passes the previous state not the original state
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // v.s.
    // this.setState is asynchronous, so the this.state.count + 1 will not start from 0
    // this.setState(() => {
    //   return {
    //     count: 0,
    //   };
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

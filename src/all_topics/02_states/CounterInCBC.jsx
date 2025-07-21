import { Component } from "react";

class CounterInCBC extends Component {
  state = { count: 0 };

  incre = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decre = () => {
    this.setState({ count: this.state.count - 1 });
  };
  rst = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>CounterInCBC : {this.state.count}</h1>
        <button onClick={this.incre}>increment</button>
        <button onClick={this.decre}>decrement</button>
        <button onClick={this.rst}>reset</button>
      </div>
    );
  }
}
export default CounterInCBC;

import { Component } from "react";

class StateInCBC extends Component {
  state = { value: "Hello" };

  updateState = () => {
    this.setState({ value: "Bye" });
  };

  render() {
    console.log(this); // current class object

    return (
      <div>
        <h1>States In CBC {this.state.value}</h1>
        <button onClick={this.updateState}>update</button>
      </div>
    );
  }
}
export default StateInCBC;

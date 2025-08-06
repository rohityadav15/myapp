import React, { Component } from "react";

export default class LifeCycleCBC extends Component {
  state = { count: 0 };

  componentDidMount() {
    console.log("Component Mounted");
    this.intervalID = setInterval(() => {
      console.log("API call");
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component Unmounted");
    clearInterval(this.intervalID);
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <h1>Life Cycle CBC</h1>
        <h2>Count = {this.state.count}</h2>
        <button onClick={this.increment}>Update</button>
      </div>
    );
  }
}

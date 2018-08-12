import React, { Component } from "react";
import { render } from "react-dom";
import List from "./list";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      todos: []
    };
    this.upVote = this.upVote.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todos => this.setState({ todos }));
  }

  upVote() {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  render() {
    const { count, todos } = this.state;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={this.upVote}>Click me</button>
        <span>Clicked {count} times</span>
        <List todos={todos} />
      </div>
    );
  }
}

render(<App title="Hello World" />, document.getElementById("root"));

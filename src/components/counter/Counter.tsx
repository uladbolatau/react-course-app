import React from "react";
import "./counter.css";
import Icon from "../UI/icon/Icon";

interface CounterState {
  count: number;
}

interface CounterProps {};

class Counter extends React.Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0,
  };

  constructor(props: CounterProps) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render(): React.ReactNode {
    const value = React.createElement(
      "span",
      {
        className: "counter-value",
      },
      this.state.count
    );
    const decrementButton = React.createElement(
      "button",
      {
        className: "counter-button btn",
        onClick: this.decrement,
      },
      <Icon name="remove"></Icon>
    );
    const incrementButton = React.createElement(
      "button",
      {
        className: "counter-button btn",
        onClick: this.increment,
      },
      <Icon name="add"></Icon>
    );
    const template = React.createElement(
      "div",
      {
        className: "counter",
      },
      ...[decrementButton, value, incrementButton]
    );

    return template;
  }
}

export default Counter;

import { Component } from "react";

interface Props {
  initialCount: number;
}

interface State {
  count: number;
}

export default class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  changeCount(amount: number) {
    this.setState((prevState) => ({ count: prevState.count + amount }));
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <button type="button" onClick={() => this.changeCount(-1)}>
          -
        </button>
        <span>{count}</span>
        <button type="button" onClick={() => this.changeCount(+1)}>
          +
        </button>
      </div>
    );
  }
}

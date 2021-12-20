import { Component } from "react";
import { ThemeContext } from "./App";

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
      <ThemeContext.Consumer>
        {(style) => (
          <div>
            <button
              style={style}
              type="button"
              onClick={() => this.changeCount(-1)}
            >
              -
            </button>
            <span>{count}</span>
            <button
              style={style}
              type="button"
              onClick={() => this.changeCount(+1)}
            >
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

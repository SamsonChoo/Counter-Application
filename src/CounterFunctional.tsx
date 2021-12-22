import { useState, useContext } from "react";
import { ThemeContext } from "./App";

interface Props {
  initialCount: number;
}

export default function CounterFunctional(props: Props) {
  const { initialCount } = props;
  const [count, setCount] = useState(initialCount);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <button
        style={theme}
        type="button"
        onClick={() => setCount((c) => c - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        style={theme}
        type="button"
        onClick={() => setCount((c) => c + 1)}
      >
        +
      </button>
    </div>
  );
}

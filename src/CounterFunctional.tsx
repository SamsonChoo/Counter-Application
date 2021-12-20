import { useState, useContext } from "react";
import { ThemeContext } from "./App";

export default function CounterFunctional({
  initialCount,
}: {
  initialCount: number;
}) {
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

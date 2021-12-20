import { useState } from "react";

export default function CounterFunctional({
  initialCount,
}: {
  initialCount: number;
}) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button type="button" onClick={() => setCount((c) => c - 1)}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
    </div>
  );
}

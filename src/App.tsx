import { createContext, useState, useMemo } from "react";
import Counter from "./Counter";
import CounterFunctional from "./CounterFunctional";

interface StyleContext {
  backgroundColor: string;
}

export const ThemeContext = createContext<StyleContext>({
  backgroundColor: "red",
});

function App() {
  const [theme, setTheme] = useState("red");
  const styleMemo = useMemo(() => ({ backgroundColor: theme }), [theme]);

  return (
    <ThemeContext.Provider value={styleMemo}>
      Counter Component
      <Counter initialCount={0} />
      Counter Functional
      <CounterFunctional initialCount={0} />
      <button
        type="button"
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "red" ? "blue" : "red"))
        }
      >
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;

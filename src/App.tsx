import Counter from "./Counter";
import CounterFunctional from "./CounterFunctional";

function App() {
  return (
    <>
      Counter Component
      <Counter initialCount={0} />
      Counter Functional
      <CounterFunctional initialCount={0} />
    </>
  );
}

export default App;

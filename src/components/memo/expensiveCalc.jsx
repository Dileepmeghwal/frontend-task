import { useMemo, useState } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // without memo
  const expensiveCalc = (count) => {
    console.log("expensive calculation rendering...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += count;
    }
    return result;
  };

  //   after memoise useMemo

  const memoiseValue = useMemo(() => expensiveCalc(count), [count]);
  return (
    <>
      <h1>useMemo ExpensiveCalculation</h1>
      <p>Count: {count}</p>
      {/* <p>expensive data: {expensiveCalc(count)}</p> */}
      <p>memoised data: {memoiseValue}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update other state {otherState}
      </button>
    </>
  );
};

export default ExpensiveCalculation;

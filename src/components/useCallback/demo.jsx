import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("ChildComponent rendered");
  return (
    <>
      <p>Child</p>
      <button onClick={onClick}>Click</button>
    </>
  );
});

function DemoUseCallback() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleClickwithoutcallback = () => {
    console.log(`Button clicked! Count is: ${count}`);
  };
  const handleClickwithcallback = useCallback(() => {
    console.log(`Button clicked! Count is: ${count}`);
  }, [count]);
  console.log("App rendered.");

  const toggleState = () => {
    setOtherState(!otherState);
  };
  return (
    <>
      <p>Counter:{count}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={toggleState}>Toggle OtherState</button>

      <p>without useCallback</p>
      <ChildComponent onClick={handleClickwithoutcallback} />
      <p>with useCallback</p>
      <ChildComponent onClick={handleClickwithcallback} />
    </>
  );
}

export default DemoUseCallback;

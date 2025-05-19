import React, { useCallback, useState } from "react";

const ChildComponent = React.memo(({ onClick }) => {
  console.log("child render...");

  return <button onClick={onClick}>Click me</button>;
});

const ParentComponentCallback = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Without useCallback, handleClick is recreated on every render
  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };

  // With useCallback, handleClick is memoized and only recreated if count changes

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <h4>useCallback</h4>
      <p>count:{count}</p>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State {otherState}
      </button>
      <ChildComponent onClick={handleClick} />
    </>
  );
};

export default ParentComponentCallback;

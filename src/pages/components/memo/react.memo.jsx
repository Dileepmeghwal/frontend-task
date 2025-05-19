import React, { useState, useMemo } from "react";

const ChildComponent = React.memo(({ data }) => {
  console.log("Child rendered");
  return <div>Count: {data}</div>;
});

function ParentComponentReactMemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  return (
    <div>
      <ChildComponent data={count} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>
    </div>
  );
}
export default ParentComponentReactMemo;

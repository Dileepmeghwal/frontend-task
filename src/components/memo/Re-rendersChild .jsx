import React, { useState, useMemo } from 'react';

function ChildComponent({ data }) {
  console.log('Child rendered');
  return <div>Data: {data.value}</div>;
}

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // Memoize the object to prevent unnecessary re-renders
  const memoizedData = useMemo(() => ({ value: count }), [count]);

  return (
    <div>
      <ChildComponent data={memoizedData} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Update Other State
      </button>
    </div>
  );
}
export default ParentComponent


// this child is still render without any props change when other state update 
// goto React.memo use.
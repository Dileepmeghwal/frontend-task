import React, { useCallback, useState } from "react";

const Button = React.memo(({ onClick }) => {
  console.log("render child");
  return <button onClick={onClick}>Click Button</button>;
});

const MainComponent = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // without useCallback it will re-create on every render
  // const handleClick = () => {
  //   console.log("button click");
  //   setCount((c) => c + 1);
  // };
  // with useCallback it stop re-create this fnc
  const handleClick = useCallback(() => {
    console.log("button click");
    setCount((c) => c + 1);
  }, []);
  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Inc {count} </button>
      <button onClick={() => setOtherState((c) => c + 1)}>
        OtherState Update: {otherState}
      </button>
      <Button onClick={handleClick} />
    </>
  );
};

export default MainComponent;

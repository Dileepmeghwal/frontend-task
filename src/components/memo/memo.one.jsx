import { useMemo, useState } from "react";

const MemoOne = () => {
  const [otherState, setOtherState] = useState(0);
  const [count, setCount] = useState(0);
  const list = [
    { id: 1, name: "kin kidrasano" },
    { id: 2, name: "disha patani" },
    { id: 3, name: "shradha kapoor" },
    { id: 4, name: "Dia penty" },
    { id: 5, name: "asihwarya rai " },
    { id: 6, name: "neha dhupia ai " },
  ];

  const memoise = useMemo(() => {
    return list;
  }, [count]);
  console.log(memoise);

  const handleState = () => {
    setOtherState((c) => c + 1);
  };

  return (
    <>
      <h4>Memo</h4>
      <button onClick={() => setCount((c) => c + 1)}>Inc:{count}</button>
      <button onClick={handleState}>Update OtherState</button>
    </>
  );
};
export default MemoOne;

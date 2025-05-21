import { useEffect, useState } from "react";

const MouseTracker = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    console.log("event listner added");

    return () => {
      console.log("Cleaninign event listner");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [count]);

  useEffect(() => {
    const title = () => {
      document.title = "Good boy";
    };

    return () => document.title;
  }, [count]);
  return (
    <>
      Mouse Position:X:{position.x} Y:{position.y}
      {`Count: ${count}`}{" "}
      <button onClick={() => setCount(count + 1)}>Click</button>{" "}
    </>
  );
};
export default MouseTracker;

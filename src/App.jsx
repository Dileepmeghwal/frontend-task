import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NestedCheckbox from "./pages/NestedCheckbox";
import NestedCheckTwo from "./pages/nestedCheckTwo";
import Prep from "./pages/pre";
import MouseTracker from "./pages/mouseTracker";
import ExpensiveCalculation from "./pages/components/memo/expensiveCalc";
import ParentComponent from "./pages/components/memo/Re-rendersChild ";
import ParentComponentReactMemo from "./pages/components/memo/react.memo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NestedCheckbox /> */}
      {/* <NestedCheckTwo /> */}
      {/* <Prep/> */}
      {/* <MouseTracker /> */}
      {/* <ExpensiveCalculation /> */}
      {/* <ParentComponent /> */}
      <ParentComponentReactMemo />

    </>
  );
}

export default App;

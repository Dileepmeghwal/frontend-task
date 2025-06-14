import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NestedCheckbox from "./pages/NestedCheckbox";
import NestedCheckTwo from "./pages/nestedCheckTwo";
import Prep from "./pages/pre";
import MouseTracker from "./pages/mouseTracker";
import Memoize from "./pages/memoize";
import ExpensiveCalculation from "./components/memo/expensiveCalc";
import ParentComponent from "./components/memo/Re-rendersChild ";
import ParentComponentReactMemo from "./components/memo/react.memo";
import ParentComponentCallback from "./components/useCallback/useCallbackComponent";
import SearchList from "./components/useCallback/searchOptimise";
import { ThemeProvider } from "./components/useContext/themSwitch";
import MainBody from "./components/useContext/mainBody";
import { AuthProvider } from "./components/useContext/useAuth";
import TrafficLight from "./pages/trafficLight";
import DemoUseCallback from "./components/useCallback/demo";
import MainComponent from "./components/useCallback/test";
import MemoOne from "./components/memo/memo.one";
import SearchFilter from "./pages/searchFilter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <NestedCheckbox /> */}
      {/* <NestedCheckTwo /> */}
      {/* <Prep/> */}
      {/* <MouseTracker /> */}
      {/* <Memoize /> */}
      {/* <ExpensiveCalculation /> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponentReactMemo /> */}
      {/* <ParentComponentCallback /> */}
      {/* <SearchList /> */}
      {/* <ThemeProvider>
        <MainBody />
      </ThemeProvider> */}
      {/* <TrafficLight /> */}
      {/* <DemoUseCallback/> */}
      {/* <MainComponent/> */}
      {/* <MemoOne /> */}
      <SearchFilter />
    </>
  );
}

export default App;

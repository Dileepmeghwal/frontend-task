import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NestedCheckbox from "./pages/NestedCheckbox";
import NestedCheckTwo from "./pages/nestedCheckTwo";
import Prep from "./pages/pre";
import MouseTracker from "./pages/mouseTracker";
import Memoize from "./pages/memoize";
import ExpensiveCalculation from "./pages/components/memo/expensiveCalc";
import ParentComponent from "./pages/components/memo/Re-rendersChild ";
import ParentComponentReactMemo from "./pages/components/memo/react.memo";
import ParentComponentCallback from "./pages/components/useCallback/useCallbackComponent";
import SearchList from "./pages/components/useCallback/searchOptimise";
import { ThemeProvider } from "./pages/components/useContext/themSwitch";
import MainBody from "./pages/components/useContext/mainBody";
import { AuthProvider } from "./pages/components/useContext/useAuth";

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
      <ThemeProvider>
        <MainBody />
      </ThemeProvider>
    </>
  );
}

export default App;

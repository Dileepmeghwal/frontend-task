import React, { useCallback, useContext, useMemo, useState } from "react";
import { ThemeContext } from "./themSwitch";
import { useAuth } from "./useAuth";

const MainBody = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useAuth();


  const [count, setCount] = useState(0);
  //   const handleClick = useCallback(() => {
  //     console.log("count render");
  //     setCount(count + 1);
  //   }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        background: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <>MainBody</>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "light"}
      </button>
      <button onClick={handleClick}>{count}Click</button>
    </div>
  );
};

export default MainBody;

import React, { useState, useEffect } from "react";
import { useCopyToClipboard } from "../components/customHooks/useCopy";

const TrafficLight = () => {
  // State to track the current light
  const [currentLight, setCurrentLight] = useState("green");
  const [copied, handleCopyText ] = useCopyToClipboard();

  // Light durations in milliseconds
  const durations = {
    green: 3000, // 3 seconds
    yellow: 1000, // 1 second
    red: 3000, // 3 seconds
  };

  // Function to get the next light in the cycle
  const getNextLight = (current) => {
    switch (current) {
      case "green":
        return "yellow";
      case "yellow":
        return "red";
      case "red":
        return "green";
      default:
        return "green";
    }
  };

  // Automatic light transition using useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLight(getNextLight(currentLight));
    }, durations[currentLight]);

    // Cleanup timer on component unmount or light change
    console.log("clear");
    return () => clearTimeout(timer);
  }, [currentLight, durations]);

  // Handler for manual light change
  const handleNextLight = () => {
    setCurrentLight(getNextLight(currentLight));
  };

  // Styles for lights based on active state
  const lightStyles = (color) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: currentLight === color ? color : "gray",
    margin: "10px",
    transition: "background-color 0.3s",
  });
  let text = "sdkmklgkgnsl";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">
        Traffic Light{" "}
        <button
          style={{ background: "#9898" }}
          onClick={() => handleCopyText(text)}
        >
          c {copied ? "Copied" : "copy"}
        </button>
      </h1>
      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg">
        <div style={lightStyles("red")} />
        <div style={lightStyles("yellow")} />
        <div style={lightStyles("green")} />
      </div>
      <button
        onClick={handleNextLight}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Next Light
      </button>
    </div>
  );
};

export default TrafficLight;

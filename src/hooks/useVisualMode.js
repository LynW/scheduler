import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode) => {
    setMode(newMode);
    history.push(newMode);
  };

  const back = () => {
    history.pop();
    const last = history[history.length - 1];
    setMode(last);
  };

  return mode, transition, back;
}
import { useState } from "react";

export default function useVisualMode(initial, newMode) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    if (
      replace
        ? setHistory((prev) => [...prev.slice(0, -1), newMode])
        : setHistory((prev) => [...prev, newMode])
    );
  };

  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, -1)]);
      setMode(history[history.length - 2]);
    }
    return;
  };

  return { mode, transition, back };
}

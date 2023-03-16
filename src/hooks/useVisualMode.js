import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    setMode(mode);
    if (
      replace
        ? setHistory((prev) => [...prev.slice(0, history.length-1), mode])
        : setHistory((prev) => [...prev, mode])
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

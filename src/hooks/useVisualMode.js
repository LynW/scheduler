import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    console.log("Transitioned! history ", history)
    if (replace) {
      console.log("In IF transition: ", history)
      setHistory((prev) => [...prev.slice(0, prev.length - 1), mode])
    } else {
      console.log("In IF transition is false ", history)
      setHistory((prev) => {
        console.log("prev and mode", [...prev, mode]);
        return [...prev, mode]
      })
    }
    setMode(mode);
  };

  const back = () => {
    if (history.length > 1) {
      console.log("In IF back:", history)
      setHistory((prev) => {
        console.log("Prev: ", prev);
        console.log("History again: ", history);
        return [...prev.slice(0, -1)]});
      setMode(history[history.length - 2]);
    }
    return;
  };

  return { mode, transition, back };
}

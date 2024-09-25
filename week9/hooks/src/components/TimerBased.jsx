import { useState } from "react";
import { useInterval } from "../hooks/useInterval";

export const TimerBased = () => {
  const [count, setCount] = useState(0);
  const timer = () => {
    setCount((prev) => prev + 1);
  };
  useInterval(timer, 1000);
  return <h1>Timer is at {count}</h1>;
};

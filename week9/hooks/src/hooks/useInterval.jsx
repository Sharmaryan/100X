import { useEffect } from "react";

export const useInterval = (fn, timer) => {
  useEffect(() => {
    const id = setInterval(() => {
      fn();
    }, timer);
    return () => {
      clearInterval(id);
    };
  }, []);
};

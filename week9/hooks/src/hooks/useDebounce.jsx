import { useEffect, useState } from "react";

export const useDebounce = (value, timer) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, timer);
    return () => {
      clearTimeout(id);
    };
  }, [value]);

  return debounceValue;
};

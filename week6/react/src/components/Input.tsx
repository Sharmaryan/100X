import React, { useCallback } from "react";

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export const Input = () => {
  const debouncedHandleInput = useCallback(
    debounce((value) => {
      console.log(value);
    }, 1000),
    []
  );
  const handleInput = (e) => {
    debouncedHandleInput(e.target.value);
  };
  return <input type="text" onChange={handleInput} />;
};

import { useEffect, useState } from "react";

export const useMousePointer = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMoveCoordinates = (e) => {
      setMouseCoordinates({ x: e.screenX, y: e.screenY });
    };
    window.addEventListener("mousemove", mouseMoveCoordinates);
    return () => {
      window.removeEventListener("mousemove", mouseMoveCoordinates);
    };
  }, []);
  return mouseCoordinates;
};

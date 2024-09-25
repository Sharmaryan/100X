import React from "react";
import { useMousePointer } from "../hooks/useMousePointer";

export const MousePointer = () => {
  const { x, y } = useMousePointer();

  return (
    <div>
      Mouse position is {x} {y}
    </div>
  );
};

import React, { useEffect, useState } from "react";

export const MountUnmount2 = () => {
  const [isMounted, setIsMounted] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setIsMounted((prev) => !prev);
        }}
      >
        {isMounted ? "Unmount component" : "Mount component"}
      </button>
      <br />
      <br />
      {isMounted ? <ComponentToBeMountedAndUnmout /> : <div></div>}
    </div>
  );
};

const ComponentToBeMountedAndUnmout = () => {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return <div>Component Mounted</div>;
};

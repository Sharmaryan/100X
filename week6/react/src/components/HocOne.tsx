import React, { useEffect } from "react";

export const HocOne = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);
    }, []);
    return <WrappedComponent {...props} />;
  };
};

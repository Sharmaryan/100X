import React, { useEffect, useState } from "react";

export const MountUnmout = () => {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender((prev) => !prev);
    }, 5000);
  }, []);
  // return <>{render ? <MyComponent /> : <div></div>}</>;
  return <>{render ? <ClassBasedExample /> : <div></div>}</>;
};

// function MyComponent() {
//   useEffect(() => {
//     console.error("component mounted");

//     return () => {
//       console.log("component unmounted");
//     };
//   }, []);

//   return <div>From inside my component</div>;
// }

class ClassBasedExample extends React.Component {
  componentDidMount() {
    console.log('mounted')
  }

  componentWillUnmount() {
    console.log('unmounted')
  }

  render() {
    return <div>hey</div>
  }
}

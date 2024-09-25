import React from "react";
import { useIsOnline } from "../hooks/useIsOnline";

export const Online = () => {
  const { isOnline } = useIsOnline();
  return <div>{isOnline ? "You are back Online" : "Network disconnected"}</div>;
};

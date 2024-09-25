import React, { useEffect, useState } from "react";

export const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const userOnline = () => {
      setIsOnline(true);
    };
    const userOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", userOnline);
    window.addEventListener("offline", userOffline);

    return () => {
      window.removeEventListener("online", userOnline);
      window.removeEventListener("offline", userOffline);
    };
  }, []);
  return { isOnline };
};

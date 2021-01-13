import { useEffect, useRef } from "react";

const useKey = (key, callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handle = (event) => {
      if (event.code === key) {
        callbackRef.current(event);
      }
    };
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
};

export default useKey;

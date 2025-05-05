import { useEffect, useRef } from "react";

export const useTimer = (callback: () => void, delay = 500) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  function trigger() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    timer.current = setTimeout(callback, delay);
  }

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, []);

  return { trigger };
};

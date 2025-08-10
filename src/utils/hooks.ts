import { useEffect, useState } from "react";

export const useDelay = (time: number): boolean => {
  const [render, setRender] = useState(true);

  useEffect(() => {
    let wait = +(time + "00");
    if (wait > 9000) {
      wait = 9000;
    }
    let timeout: number;
    timeout = window.setTimeout(() => setRender(false), wait + 800);

    return () => {
      clearTimeout(timeout);
      setRender(true);
    };
  }, [time]);

  return render;
};

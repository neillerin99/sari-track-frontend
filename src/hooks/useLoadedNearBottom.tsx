import { useEffect, useState } from "react";

export function useLoadedNearBottom(threshold = 200) {
  const [loadedNearBottom, setLoadedNearBottom] = useState(false);

  useEffect(() => {
    const check = () => {
      const { scrollY, innerHeight } = window;
      const { scrollHeight } = document.documentElement;

      const isNearBottom = innerHeight + scrollY >= scrollHeight - threshold;

      setLoadedNearBottom(isNearBottom);
    };

    // Wait for scroll restoration
    requestAnimationFrame(() => {
      requestAnimationFrame(check);
    });
  }, [threshold]);

  return loadedNearBottom;
}

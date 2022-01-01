import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    if (!process.browser) return defaultValue;
    const saved = localStorage.getItem(key);
    if (!saved) return defaultValue;
    try {
      const initial: T = JSON.parse(saved);
      return initial;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`unexpected ${key} value, error:`, e);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (!process.browser) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return { value, setValue };
}

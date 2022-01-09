import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const saved = localStorage.getItem(key);
    if (!saved) return;

    try {
      const initialValue: T = JSON.parse(saved);
      setValue(initialValue);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(`unexpected ${key} value, error:`, e);
    }
  }, []);

  const setValueWithSave = (value: T) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { value, setValue: setValueWithSave };
}

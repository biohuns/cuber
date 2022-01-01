import { createContext } from "react";
import { FacePattern } from "../entity/cube";
import { useLocalStorage } from "./localstorage";

type Settings = {
  facePattern: FacePattern;
};

type SettingsContextValueType = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
};

const defaultSettings: Settings = {
  facePattern: "global",
};

export function useSettings(): SettingsContextValueType {
  const { value, setValue } = useLocalStorage<Settings>(
    "settings",
    defaultSettings
  );
  return { settings: value, setSettings: setValue };
}

export const settingsContext = createContext<SettingsContextValueType>({
  settings: defaultSettings,
  setSettings: () => {},
});

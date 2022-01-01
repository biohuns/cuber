export type ColorScheme = {
  U: string;
  R: string;
  F: string;
  D: string;
  L: string;
  B: string;
};

export const colorSchemes = {
  global: {
    U: "#f8e04b",
    R: "#e33325",
    F: "#1d49bc",
    D: "#ffffff",
    L: "#ee8734",
    B: "#418837",
  },
  "old-japan": {
    U: "#1d49bc",
    R: "#e33325",
    F: "#f7e04b",
    D: "#ffffff",
    L: "#ee8734",
    B: "#418837",
  },
} as const;

export type FacePattern = keyof typeof colorSchemes;

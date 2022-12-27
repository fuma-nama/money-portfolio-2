import { createTheme } from "@nextui-org/react";

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      textSecondary: "rgba(55,55,55, 0.7)",
      glass: "rgba(255, 255, 255, 0.1)",
    },
  },
});

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      textSecondary: "$accents7",
      glass: "rgba(255, 255, 255, 0.1)",
    },
  },
});

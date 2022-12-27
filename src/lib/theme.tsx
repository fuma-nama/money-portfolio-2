import { useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

export type Theme = "light" | "dark";
export function useColorMode() {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return {
    isDark,
    setTheme: (theme: Theme) => setTheme(theme),
  };
}

import { changeTheme, useTheme } from "@nextui-org/react";

export type Theme = "light" | "dark";
export function useColorMode() {
  const { isDark } = useTheme();

  return {
    isDark,
    setTheme: (theme: Theme) => {
      window.localStorage.setItem("data-theme", theme); // you can use any storage
      changeTheme(theme);
    },
  };
}

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createTheme,
  getDocumentTheme,
  NextUIProvider,
} from "@nextui-org/react";
import "./index.css";
import { Theme } from "./utils/theme";

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

const Main = () => {
  const defaultTheme = "dark";
  const [isDark, setIsDark] = useState(() => {
    const current = window.localStorage.getItem("data-theme") as Theme;
    const theme = current == null ? defaultTheme : current;
    return theme === "dark";
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const newTheme = getDocumentTheme(document?.documentElement);
      setIsDark(newTheme === "dark");
    });

    // Observe the document theme changes
    observer.observe(document?.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "style"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <App />
    </NextUIProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

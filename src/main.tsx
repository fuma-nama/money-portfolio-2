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

const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      textBrand: "$accents8",
      textSecondary: "rgba(55,55,55, 0.7)",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      textBrand: "$accents8",
      textSecondary: "$accents7",
    },
  },
});

const Main = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const theme = window.localStorage.getItem("data-theme") as Theme;
    if (theme != null) {
      setIsDark(theme === "dark");
    }

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

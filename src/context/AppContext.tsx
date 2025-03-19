import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AppContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
  const [theme, setTheme] = useState<"light" | "dark">(storedTheme || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.style.backgroundImage =
      theme === "light"
        ? "url('Sky-blue-converted.jpg')"
        : "url('space-stars-converted.jpg')"
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return <AppContext.Provider value={{ theme, toggleTheme }}>{children}</AppContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useTheme must be used within an AppProvider");
  return context;
};

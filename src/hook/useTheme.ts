import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useTheme = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useTheme must be used within an AppProvider");
  return context;
};
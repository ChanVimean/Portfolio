import { useTheme } from "../context/AppContext"

const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme()

  const themeOptions = {
    light: { label: "🌙 Dark Mode" },
    dark: { label: "☀️ Light Mode" },
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-md border-2 text-[var(--theme-500)] transition-all duration-300`}
    >
      { themeOptions[theme].label }
    </button>
  )
}

export default ThemeToggle

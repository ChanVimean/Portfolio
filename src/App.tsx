import BottomBar from "./components/BottomBar"
import Dotted from "./components/Dotted"
import NavBar from "./components/NavBar"
import { useTheme } from "./context/AppContext"


const App = () => {

  const { theme, toggleTheme } = useTheme()
  const sections = ["Home", "About", "Projects", "Contact", "Resume"]

  return (
    <>
      <nav>
        <NavBar sections={sections} theme={theme} toggleTheme={toggleTheme} />
        <BottomBar sections={sections} theme={theme} />
      </nav>

      <main></main>

      <footer>
        <Dotted sections={sections} theme={theme} />
      </footer>

    </>
  )
}

export default App

import { JSX, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "./context/AppContext"
import BottomBar from "./components/BottomBar"
import Dotted from "./components/Dotted"
import NavBar from "./components/NavBar"
import About from "./page/About"
import Contact from "./page/Contact"
import Home from "./page/Home"
import Projects from "./page/Projects"
import Resume from "./page/Resume"


interface Section {
  name: string,
  component: JSX.Element
}

const sections: Section[] = [
  { name: "Home", component: <Home />},
  { name: "About", component: <About />},
  { name: "Projects", component: <Projects />},
  { name: "Contact", component: <Contact />},
  { name: "Resume", component: <Resume />}
]

const App:React.FC = () => {

  const { theme, toggleTheme } = useTheme()
  const [activeIndex, setActveIndex] = useState<number>(0)

  const handlScroll = (index: number) => {
    setActveIndex(index)
    document.getElementById(sections[index].name)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50">
        <NavBar sections={sections.map(s => s.name)} theme={theme} toggleTheme={toggleTheme} handleScroll={handlScroll} />
        <BottomBar sections={sections.map(s => s.name)} theme={theme} />
      </nav>

      <main className="flex w-screen h-screen overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {
          sections.map((section, index) => (
            <motion.section
              key={section.name}
              id={section.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0.5 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-screen h-screen flex justify-center items-center snap-center"
            >
              {section.component}
            </motion.section>
          ))
        }
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50">
        <Dotted sections={sections.map(s => s.name)} theme={theme} />
      </footer>

    </div>
  )
}

export default App

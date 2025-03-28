import { JSX, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./hook/useTheme";
import useSectionObserver from "./hook/useSectionObserver";
import useScrollHandler from "./hook/useScrollHandler";

import Dotted from "./components/Dotted";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Projects from "./page/Projects";
import Resume from "./page/Resume";

interface Section {
  name: string,
  component?: JSX.Element
}

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mainRef = useRef<HTMLDivElement>(null);

  const sections = useMemo<Section[]>(
    () => [
      { name: "Home" },
      { name: "About" },
      { name: "Projects" },
      { name: "Contact" },
      { name: "Resume" },
    ],
    []
  );

  // ? Find Index for Home Page
  const aboutIndex: number = sections.findIndex(section => section.name === "About");
  const resumeIndex: number = sections.findIndex(section => section.name === "Resume");

  // ? Scroll to Distination
  const handleScrollTo = useCallback((index: number) => {
    if (index < 0 || index >= sections.length) return;
    setActiveIndex(index);
    document
      .getElementById(sections[index].name)
      ?.scrollIntoView({ behavior: "smooth" });
  }, [sections]);

  // ! Define components inside useMemo to avoid re-renders
  const sectionComponents = useMemo<Section[]>(
    () => [
      { name: "Home", component: <Home aboutIndex={aboutIndex} resumeIndex={resumeIndex} handleScrollTo={handleScrollTo} /> },
      { name: "About", component: <About theme={theme} /> },
      { name: "Projects", component: <Projects theme={theme} /> },
      { name: "Contact", component: <Contact /> },
      { name: "Resume", component: <Resume theme={theme} /> },
    ],
    [theme, aboutIndex, resumeIndex, handleScrollTo]
  );

  // ? Handle Window Resize for Mobile Detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ? Observe Sections in Mobile Mode
  useSectionObserver(
    sections.map((s) => s.name),
    activeIndex,
    setActiveIndex,
    isMobile
  );

  // ? Handle Scrolling for PC
  useScrollHandler(mainRef, activeIndex, setActiveIndex, isMobile);

  return (
    <div className="overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-50">
        <NavBar
          sections={sectionComponents.map((s) => s.name)}
          theme={theme}
          toggleTheme={toggleTheme}
          handleScroll={handleScrollTo}
        />
        <BottomBar
          sections={sectionComponents.map((s) => s.name)}
          handleScroll={handleScrollTo}
        />
      </nav>

      <main
        ref={mainRef}
        className={`w-screen h-screen scroll-smooth scrollbar-hidden snap-mandatory
          ${
            isMobile
              ? "flex flex-col overflow-y-auto snap-y"
              : "flex overflow-hidden snap-x"
          }`}
      >
        {sectionComponents.map((section, index) => (
          <motion.section
            key={section.name}
            id={section.name}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: activeIndex === index ? 1 : 0.5, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-screen h-screen flex justify-center items-center snap-center"
          >
            {section.component}
          </motion.section>
        ))}
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50">
        <Dotted
          sections={sectionComponents.map((s) => s.name)}
          theme={theme}
          activeIndex={activeIndex}
          handleScroll={handleScrollTo}
        />
      </footer>
    </div>
  );
};

export default App;
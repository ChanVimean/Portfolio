import { useState } from "react"
import { FaRegCirclePlay } from "react-icons/fa6"
import { GhostButton, SkyButton, SpaceButton } from "../components/Buttons"



interface AboutProps {
  theme: "light" | "dark"
}

interface ProfileProps extends AboutProps {
  activeSection: "Education" | "Skills" | "Personal"
  setActiveSection: (section: "Education" | "Skills" | "Personal") => void
}


// ? Profile Component
const ProfileComponent:React.FC<ProfileProps> = ({ theme, activeSection, setActiveSection }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4 lg:space-y-10">
      {/* Brief Detail */}
      <section className="w-5/6 lg:w-2/3 h-auto flex flex-row lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-4 overflow-hidden">
        <div className="w-2/5 lg:w-full h-full overflow-hidden">
          <img
            src="Tony_Stark.jpg"
            alt="About Profile"
            className="w-full h-full object-cover" />
        </div>
        <h1 className="w-3/5 lg:w-full h-full lg:h-auto text-sm md:text-lg font-medium flex items-center">
          "Building from inspiration, where every detail matters."
        </h1>
      </section>

      {/* Navigation Buttons on PC */}
      <section className="hidden lg:flex space-x-4 font-semibold text-lg">
        <button onClick={() => setActiveSection("Education")}>
          <SpaceButton theme={theme} title={"Education"} />
        </button>
        <button onClick={() => setActiveSection("Skills")}>
          <SkyButton theme={theme} title={"Skills"} />
        </button>
        <button onClick={() => setActiveSection("Personal")}>
          <GhostButton theme={theme} title={"Personal"} />
        </button>
      </section>

      {/* Navigation Buttons on Mobile x Tablet */}
      <section className="flex lg:hidden justify-evenly w-5/6 space-x-4 md:space-x-6 text-lg md:text-xl font-semibold border-b-2 pb-2 border-gray-500">
        <button
          onClick={() => setActiveSection("Education")}
          className={`duration-150 ease-in-out underline-animation
            ${theme === "light" 
              ? activeSection === "Education" 
                ? "text-blue-700"
                : "text-blue-500"
              : activeSection === "Education"
                ? "text-[var(--theme-300)]"
                : "text-[var(--theme-400)]"
            }`}
        >
          Education
        </button>
        <button
          onClick={() => setActiveSection("Skills")}
          className={`duration-200 ease-in-out border-x-2 border-gray-500 px-6
            ${theme === "light" 
              ? activeSection === "Skills" 
                ? "text-blue-700"
                : "text-blue-500 hover:text-blue-500"
              : activeSection === "Skills"
                ? "text-[var(--theme-300)]"
                : "text-[var(--theme-400)]"
            }`}
        >
          Skills
        </button>
        <button
          onClick={() => setActiveSection("Personal")}
          className={`duration-200 ease-in-out 
            ${theme === "light" 
              ? activeSection === "Personal" 
                ? "text-blue-700"
                : "text-blue-500 hover:text-blue-500"
              : activeSection === "Personal"
                ? "text-[var(--theme-300)]"
                : "text-[var(--theme-400)]"
            }`}
        >
          Personal
        </button>
      </section>
    </div>
  )
}


// ? Personal Component
const PersonalComponent:React.FC<AboutProps> = ({ theme }) => {
  return (
    <div className={`w-full h-full space-y-8
      ${theme === "light" ? "text-[var(--theme-500)]" : "text-[var(--theme-300)]"}`}
    >
      <article className="space-y-4 text-md md:text-lgg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Beyond the Code: About Me</span>
        </div>
        <p className="flex flex-col font-medium opacity-80 space-y-4">
          <span>                
            I'm a tech enthusiast with a love for Sci-Fi aesthetics, music, and gaming "not hard core",
            but I enjoy exploring in-game mechanics. Designing is my passion, and I prioritize useRef
            experience over just raw coding power.
          </span>
          <span>
            I work best in quiet, structured environments and prefer to solve problems independently-though
            when I hit a real roadblock, I'll seek guidance. No challenge is too big; I'll always figure
            something out.
          </span>
        </p>
      </article>

      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Sci-Fi Inspired Titles</span>
        </div>
        <ul className="font-medium opacity-80 space-y-2">
          <li>"Designed by Curiousily, Driven by Creativity"</li>
          <li>"Not Just a Coder - A Creator"</li>
          <li>"Exploring Words, Both Digital & Beyond"</li>
          <li>"Engineering Ideas, One Pixel at a Time"</li>
        </ul>
      </article>

      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Creative & Personal Titles</span>
        </div>
        <ul className="font-medium opacity-80 space-y-2">
          <li>"Where Logic Meets Imagination"</li>
          <li>"Problems-Solving is My Superpower"</li>
          <li>"Crafting Experiences, Not Just Interfaces"</li>
        </ul>
      </article>
    </div>
  )
}


// ? Education Component
const EducationComponent:React.FC<AboutProps> = ({ theme }) => {
  return (
    <div className={`w-full h-full space-y-8 text-[var(--theme-300)]
      ${theme === "light" ? "text-[var(--theme-500)]" : "text-[var(--theme-300)]"}`}
    >
      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Where knowledge meets ambitions</span>
        </div>
        <ul className="flex flex-col font-medium opacity-80 space-y-4">
          <li>University: Royal University of Law and Economics</li>
          <li>Major: Information Technology</li>
          <li>Year: Sophomore | Class of 2025</li>
        </ul>
      </article>

      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Sharpening my skills, one class at a time</span>
        </div>
        <ul className="font-medium opacity-80 space-y-2">
          <li className="space-x-2">
            <span className="underline">Web Front-End:</span>
            <span>HTML, CSS, JavaScript, Bootstrap</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Web Back-End:</span>
            <span>JavaScript, Python, Node.js, Express, Flask, MySQL</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Web Framework:</span>
            <span>JavaScript, React, Bootstrap, Tailwind, JSON Server</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Web & UX/UI Design:</span>
            <span>UX/UI Design, Tools: Figma, Adobe XD</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Application Development C#:</span>
            <span>Advance C#, OOP, System, ASP.net</span>
          </li>
        </ul>
      </article>

      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Education That Shapes Me</span>
        </div>
        <ul className="font-medium opacity-80 space-y-2">
          <li>Etec Center</li>
          <li>ICt Professional Training Center</li>
        </ul>
      </article>
    </div>
  )
}


// ? Skills Component
const SkillsComponent:React.FC<AboutProps> = ({ theme }) => {
  return (
    <div className={`w-full h-full space-y-8 text-[var(--theme-300)]
      ${theme === "light" ? "text-[var(--theme-500)]" : "text-[var(--theme-300)]"}`}
    >
      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Enery journey starts somewhere - here's mine</span>
        </div>
        <ul className="flex flex-col font-medium opacity-80 space-y-4">
          <li>Started from zero, no guide, just risks. Learned, built, and kept going.</li>
          <li>Mistakes became lessons. I break, fix, and level up.</li>
          <li>I craft sleek, high-performance web experiences - design meets code.</li>
          <li>Always learning, always evolving - the journey doesn't stop here.</li>
        </ul>
      </article>

      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Core Skills</span>
        </div>
        <ul className="font-medium opacity-80 space-y-2">
          <li className="space-x-2">
            <span className="underline">Languages:</span>
            <span>HTML, CSS, JavaScript, TypeScript, C#</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Frameworks:</span>
            <span>Bootstrap, Tailwind, React JS & TS</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Backend & Database:</span>
            <span>Node.js, Express, MySQL, MongoDB</span>
          </li>
          <li className="space-x-2">
            <span className="underline">API & Tools:</span>
            <span>RESTful API, JSON Server</span>
          </li>
        </ul>
      </article>

      <article className="space-y-4 text-md md:text-lg lg:text-xl">
        <div className="flex items-center space-x-2 text-2xl lg:text-3xl font-semibold">
          <button>
            <FaRegCirclePlay />
          </button>
          <span>Design & Media</span>
        </div>
        <ul className="font-medium opacity-80 space-y-2">
          <li className="space-x-2">
            <span className="underline">UX/UI:</span>
            <span>Figma</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Video Editing:</span>
            <span>Adobe Premier Pro</span>
          </li>
          <li className="space-x-2">
            <span className="underline">Graphics:</span>
            <span>Canva, Adobe Photoshop</span>
          </li>
          <li className="space-x-2">
            <span className="underline">IDE:</span>
            <span>Visual Studio & Visual Studio Code</span>
          </li>
        </ul>
      </article>
    </div>
  )
}


const About:React.FC<AboutProps> = ({ theme }) => {

  const [activeSection, setActiveSection] = useState<"Education" | "Skills" | "Personal">("Personal")

  return (
    <div className="w-screen h-screen flex flex-col lg:flex-row overflow-hidden pb-24 pt-14 lg:pb-0 lg:pt-0">
      <section className="w-full lg:w-1/3 h-2/6 lg:h-full">
        <ProfileComponent theme={theme} activeSection={activeSection} setActiveSection={setActiveSection} />
      </section>

      <section className="w-full lg:w-2/3 h-4/6 lg:h-full p-2 lg:p-36 space-y-2 lg:space-y-6 flex flex-col items-start justify-center">
        <div className="w-5/6 lg:w-full mx-auto">
          <button className="text-lg lg:text-2xl font-semibold opacity-75">Skip</button>
        </div>

        <article className="w-full h-full flex-1 overflow-hidden lg:overflow-visible px-4 lg:px-0">
          <div className="w-full h-full border-y border-[var(--theme-200)] py-2 overflow-y-auto">
            {activeSection === "Education" && <EducationComponent theme={theme} />}
            {activeSection === "Skills" && <SkillsComponent theme={theme} />}
            {activeSection === "Personal" && <PersonalComponent theme={theme} />}
          </div>
        </article>
      </section>
    </div>
  )
}

export default About
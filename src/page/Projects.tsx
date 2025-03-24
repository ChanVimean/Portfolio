import { useEffect, useMemo, useState } from "react"
import { FaRegCirclePlay } from "react-icons/fa6"
import { JellyGlowPress, JellyPress } from "../components/Buttons"
import { IoIosArrowForward } from "react-icons/io"
import styles from "../styles/Projects.module.css"


// TODO: Interface
interface ProjefctsProp {
  theme: "light" | "dark"
}

interface ProjectStructureProps {
  title: string,
  description: string,
  technologies: string[],
  link: string,
  note: string
}

interface ProjectComponentProps {
  image: string,
  alt: string,
  project: ProjectStructureProps
}


// TODO: Variables
const projectImages: { src: string; alt: string }[] = [
  { src: "first_project.png", alt: "First project image" },
  { src: "second_project.png", alt: "Second project image" },
  { src: "third_project.png", alt: "Third project image" },
  { src: "forth_project.png", alt: "Fourth project image" },
  { src: "", alt: "No image available" }
]

const ProjectIntel: ProjectStructureProps[] = [
  {
    title: "1st Project: Clone Saby News",
    description: "Back when I knew nothing about web development, this was my first attempt atbuilding a real website. No animations, no responsiveness - just me, HTML, CSS, and a lot of trail and error.",
    technologies: [
      "Tech: HTML, CSS, JavaScript, Bootstrap, jQuery",
      "Features: Basic layout, simple JS auto carousel",
      "Limitations: Desktop-only, no animations",
      "Hosted on: Vercel"
    ],
    link: "https://first-front-end-sandy.vercel.app",
    note: "Gotta start somewhere, right?"
  },
  {
    title: "2nd Project: Movie Stream",
    description: "A streaming site designed for all ages, featuring 50+ anime & Donghua. Built with pure HTML, CSS and JavaScript, I structured it like a React component for better modularity and handled data manipulation using JSON Server",
    technologies: [
      "Tech: HTML, CSS, Javascript",
      "React-like structure",
      "JSON Server for data organization",
      "Hosted on Vercel"
    ],
    link: "https://movie-stream-gilt-two.vercel.app",
    note: "A great experience in working around limitations while keeping it clean, structured and visually appealing."
  },
  {
    title: "3rd Project: Electronic Store",
    description: "A React + Bootstrap project designed for a seamless shopping experience. While inspired by an existing store, I customized UI to make it unique. The app is fully responsive, with a bottom bar for mobile users, giving it a mobile app-like feel.",
    technologies: [
      "Tech: React + Bootstrap",
      "JSON Server for data handling",
      "Full responsive + Mobile-friendly botttom navigation",
      "Hosted on Vercel"
    ],
    link: "https://react-electronic-store-olive.vercel.app",
    note: "With a few more pages and features, this could be a sellable product for real clients. A solid foundation for future E-Commerce projects!"
  },
  {
    title: "4th Project: Full Stack Breakthrough",
    description: "This was my biggest challenge yet-building a full-stack movei streaming platform with Next.js + Express all in one! No tutorials, just pure trail and error. I pushed myself beyond limits, transforming my earlier Movie Stream project into a fully responsive, interactive platform.",
    technologies: [
      "Tech: Next.js, Tailwind, Shadcn for skeleton",
      "Express API RBAC system + main DB MongoDB + OTP Radis",
      "Responsive, Light & Dark theme with bottom bar for Mobile-Users"
    ],
    link: "https://hana-anime.vercel.app",
    note: "Redesign Database. 50+ movies with seasons & episodes (one series has over 200+ episodes)"
  },
  {
    title: "5th Project: First Portfolio",
    description: "",
    technologies: [
      "Tech: React TypeScript",
      "Not just a portfolio, it's proof of how far I've come.",
    ],
    link: "https://portfolio-one-red-11.vercel.app",
    note: "You've made it to the final project... which happens to be the one you're viewing right now. Neat, huh?"
  }
]



// ? Project Structure Component
const ProjectStructure = ({ project }: { project:  ProjectStructureProps}) => {
  return (
    <section className="w-full h-full">
      <div className="flex items-center justify-start space-x-2">
        <FaRegCirclePlay className="text-xl lg:text-2xl" />
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
          {project.title}
        </h1>
      </div>

      {/* Main Paragraph */}
      <p className="text-sm md:text-md lg:text-lg">{project.description}</p>

      {/* List of Technologies & Demo Link + Last line */}
      <div className="space-y-6 text-sm md:text-md lg:text-lg">
        <ul>
          {project.technologies.map((tech, index) => 
            <li key={index}>{tech}</li>
          )}
        </ul>
        <h3 className="space-x-2">
          <span className="text-[var(--theme-400)]">Live Demo:</span>
          <span className="underline">{project.link}</span>
        </h3>
        <h3>{project.note}</h3>
      </div>
    </section>
  )
}


// ? Image Component
const ProjectComponent: React.FC<ProjectComponentProps> = ({ image, alt, project }) => {
  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-center">
      <section className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full md:w-4/5 h-52 md:h-80 lg:h-96 relative border-4 border-[var(--theme-200)] rounded-xl overflow-hidden">
          {
            image ? (
              <>
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-fit-cover -z-50 transition-all brightness-50" />
                <a
                  href={project.link}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <JellyGlowPress
                    text="Live Preview"
                    icon={<IoIosArrowForward />} />
                </a>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[var(--theme-200)]">
                <span>No Image Available</span>
              </div>
            )
          }
        </div>
      </section>

      <article className="w-full lg:w-1/2 space-y-2 text-sm md:text-md lg:text-lg font-medium border-y-2 border-[var(--theme-200)]">
        <div className="w-full">
          <button className="text-lg lg:text-2xl font-semibold opacity-75">Skip</button>
        </div>
        <div className="overflow-hidden overflow-y-auto h-64 md:h-72 lg:h-80">
          <ProjectStructure project={project} />
        </div>
      </article>
    </div>
  )
}


const checkpoints: number[] = [0, 25, 50, 75, 100]

const Projects:React.FC<ProjefctsProp> = ({ theme }) => {
  
  const checkPointText = useMemo(() => [
    "Processing... | 0%",
    "Processing... | 25%",
    "Processing... | 50%",
    "Processing... | 75%",
    "100%"
  ], [])

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [progress, setProgress] = useState(checkpoints[0])
  const [cpText, setCpText] = useState(checkPointText[0])

  const nextBtn = () => {
    setCurrentIndex((prev) => (prev + 1) % projectImages.length)
  }

  const prevBtn = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1))
  }

  useEffect(() => {
    setProgress(checkpoints[currentIndex])
    setCpText(checkPointText[currentIndex])
  }, [currentIndex, checkPointText])

  return (
    <div className="w-screen h-screen flex overflow-hidden py-28 px-4 md:px-8 lg:px-20 lg:py-28">
      <main className="w-full flex-1 flex flex-col items-center justify-center space-y-8">

        {/* Top */}
        <section className="w-full">
          <ProjectComponent
            image={projectImages[currentIndex].src}
            alt={projectImages[currentIndex].alt}
            project={ProjectIntel[currentIndex]} />
        </section>

        {/* Middle */}
        <section className="w-full flex justify-center space-x-4">
          <JellyPress
            text="Previous"
            onClick={prevBtn} />
          <JellyPress
            text="Next"
            colorVarient="secondary"
            onClick={nextBtn} />
        </section>

        {/* Bottom */}
        <section className="w-4/5 mx-auto space-y-2">
          <div className={styles.loaderBar}>
            <div
              className={styles.barFill}
              style={{
                width: `${progress}%`,
                transition: "width 0.5s ease-in-out"
              }} />
          </div>
          <h2 className={`font-semibold text-md md:text-lg
            ${theme === "light" ? "text-[var(--theme-500)]" : "text-[var(--theme-300)]"}`}
          >
            {cpText}
          </h2>
        </section>
      </main>
    </div>
  )
}

export default Projects
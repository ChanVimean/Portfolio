import { JSX, useEffect, useState } from "react"
import { CiAt } from "react-icons/ci"
import { IoIosPin, IoLogoNodejs, IoMdPerson } from "react-icons/io"
import { LuPhone } from "react-icons/lu"
import { FaScrewdriverWrench, FaSchool, FaArrowUpWideShort, FaArrowDownShortWide   } from "react-icons/fa6"
import { GiOpenBook } from "react-icons/gi"
import { IoSchool, IoPersonSharp } from "react-icons/io5"
import { FaPhoneAlt, FaReact } from "react-icons/fa"
import { SiAdobephotoshop, SiAdobepremierepro, SiCanva, SiExpress, SiMysql, SiTypescript } from "react-icons/si"
import { BiLogoFigma, BiLogoMongodb } from "react-icons/bi"


// TODO: Interface
interface ResumeProps {
  theme: "light" | "dark",
}

type SectionProps = {
  name: string,
  component: JSX.Element
}

type StructureType = {
  Education: StructureDataType[]
  Courses: StructureDataType[]
}

type StructureDataType = {
  title: string,
  location: string,
  year: string,
  description: string
}

interface DropDownProps extends ResumeProps {
  scrollTo: (index: number) => void,
  isMobile: boolean
}


// TODO: Mini Components
// ? Dropdown Quick Scroll-To
const Dropdown: React.FC<DropDownProps> = ({ theme, scrollTo, isMobile }) => {

  const [openDropdown, setOpenDropdown] = useState<boolean>(false)

  const icons: {icon: JSX.Element; text: string}[] = [
    { text: "Profile", icon: <IoPersonSharp /> },
    { text: "Edu", icon: <IoSchool /> },
    { text: "Courses", icon: <FaSchool /> },
    { text: "Ref", icon: <GiOpenBook /> }
  ]

  const filteredIcons = icons.filter(item => item.text !== "Profile" || isMobile)

  // ? From Uiverse.io by 3bdel3ziz-T
  return (
    <div className="space-y-2">
      {/* Toggle Dropdown */}
      <section
        onClick={() => setOpenDropdown(!openDropdown)}
        className={`w-full text-xl font-medium flex items-center justify-evenly p-2 space-x-2
          overflow-hidden rounded-sm bg-[var(--theme-100)] cursor-pointer
          ease-in-out duration-150 hover:scale-105 active:scale-95
        `}
      >
        { openDropdown ? <FaArrowUpWideShort /> : <FaArrowDownShortWide />}
      </section>

      {/* Dropdown */}
      <section className={`w-full flex flex-col justify-center items-center
        transition-all duration-300 ease-in-out
        ${openDropdown
          ? "opacity-100 translate-y-0 max-h-[500px]"
          : "opacity-0 -translate-y-4 max-h-0"}
      `}>
        <article className="w-full rounded-sm shadow-lg shadow-black/15 bg-[var(--theme-100)] overflow-hidden">
          { filteredIcons.map((data, index) =>
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-full flex items-center justify-center p-2 cursor-pointer bg-[var(--theme-100)]
                text-[var(--theme-500)] ease-in-out duration-150 hover:scale-105 active:scale-95
                ${theme === "light" ? "active:bg-cyan-100" : "active:bg-sky-500"}`}
            >
              <div className="flex flex-col items-center justify-center" >
                {data.icon}
                <span>{data.text}</span>
              </div>
            </button>
          )}
        </article>
      </section>

    </div>
  )
}


// ? Profile-Side
const Profile = () => {

  const contactInfo: { icon: JSX.Element, text: string }[] = [
    { icon: <LuPhone />, text: "+855 89 804 644" },
    { icon: <CiAt />, text: "vimeanchan09@gmail.com" },
    { icon: <IoIosPin />, text: "House 13E0 St.60 Khan Dangkao Phnom Penh" }
  ]

  const skillsIcon: JSX.Element[] = [
    <IoLogoNodejs />,
    <SiTypescript />,
    <SiExpress />,
    <FaReact />,
    <SiMysql />,
    <BiLogoMongodb />,
    <BiLogoFigma />,
    <SiCanva />,
    <SiAdobepremierepro />,
    <SiAdobephotoshop />
  ]

  return (
    <div className="w-full h-full">
      <header className="w-full md:h-1/4 lg:h-2/5 flex flex-col items-center justify-center space-y-2">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
          <img
            src="Tony_Stark.jpg"
            alt="Profile Resume"
            className="w-full h-full object-fit-cover" />
        </div>
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Chan Vimean</h2>
          <h3 className="text-lg md:text-xl">Web Full-Stack Developer & UX/UI Designer</h3>
        </section>
      </header>

      <article className="w-full md:h-3/4 lg:h-3/5 flex flex-col justify-evenly p-2 font-normal lg:text-md">
        {/* About me */}
        <section className="space-y-2">
          <header className="flex items-center justify-center text-xl font-semibold space-x-2">
            <IoMdPerson  />
            <span>About me</span>
          </header>
          <p>
            Creative and problem-solving IT student with a passion htmlFor Front-End development
            and UX/UI Design. Skilled in JavaScript, Figma, and full-stack tech, always
            prioritizing user experience over chaotic coding. Independent learner, trend-savy,
            and driven to craft intuitive digital solutions.
          </p>
        </section>

        {/* Skills */}
        <section className="space-y-2">
          <h1 className="flex items-center justify-center text-xl font-semibold space-x-2">
            <FaScrewdriverWrench />
            <span>Skills</span>
          </h1>
          <ul className="flex items-center justify-center space-x-3 text-2xl">
            { skillsIcon.map((skill, index) =>
              <li key={index}>{skill}</li>
            )}
          </ul>
        </section>

        {/* Contact */}
        <section className="space-y-2">
          <h1 className="flex items-center justify-center text-xl font-semibold space-x-2">
            <FaPhoneAlt />
            <span>Contact</span>
          </h1>
          <ul className="flex flex-col justify-evenly py-2 border-y-2 border-[var(--theme-300)]">
            { contactInfo.map((contact, index) =>
              <li key={index} className="h-2/6 flex items-center space-x-2">
                <div className="text-lg">{contact.icon}</div>
                <span>{contact.text}</span>
              </li>
            )}
          </ul>
        </section>
      </article>
    </div>
  )
}


// ? Referances
const Referances = () => {
  return (
    <div className="w-full h-full space-y-5 text-lg md:text-xl font-normal">
      <header className="w-full flex-shrink-0 lg:h-1/6 text-3xl md:text-4xl flex items-center justify-center space-x-3 font-semibold">
        <GiOpenBook />
        <span>Referances</span>
      </header>

      <article className="w-full flex-1 lg:h-5/6 flex flex-col md:flex-row items-start justify-start md:justify-evenly space-y-4 lg:space-y-0 py-2 border-y-2 border-[var(--theme-300)] lg:border-none">
        {/* 1st Referanec */}
        <ul className="text-start space-y-2">
          <li className="font-semibold text-2xl md:text-3xl">Nhanh Nhim</li>
          <li>Director of ICT Center</li>
          <li>
            <span className="font-semibold">Phone: </span>
            070 295 027
          </li>
          <li>
            <span className="font-semibold">Email: </span>
            nhanhnhim3@gmail.com
          </li>
        </ul>

        {/* 2nd Referanec */}
        <ul className="text-start space-y-2">
          <li className="font-semibold text-2xl md:text-3xl">Kung Noraksmey</li>
          <li>Instructor of Etec Center</li>
          <li>
            <span className="font-semibold">Phone: </span>
            010 406 414
          </li>
          <li>
            <span className="font-semibold">Email: </span>
            krisjenxz@gmail.com
          </li>
        </ul>
      </article>
    </div>
  )
}


// ? Education & Courses Structure
const structureData: StructureType = {
  Education: [
    {
      title: "Bachelor of InhtmlFormation Technology",
      location: "Royal University of Law and Economics (RULE)",
      year: "2024-Present",
      description: "Currently a sophomore majoring in Information Technology at University of Law and Economics (RULE). Learning the art of problem-solving and mastering both Front-End and Full-Stack development. RULE's strong academic foundation fuels my passion htmlFor innovative tech solutions in a fast-evolving industry."
    },
    {
      title: "English GEP 12 and Diploma",
      location: "Australia Centre for Education (ACE)",
      year: "2019-2023",
      description: "Complated English studies at ACE, Toul TUm Poung, Phnom Penh, earning a GEP 12 certification and a Diploma of Reading. Achieved an IELTS Band 5.5, showcasing my proficiency and decication to continous language improvement."
    }
  ],
  Courses: [
    {
      title: "Full-Stack Development",
      location: "Etec Center",
      year: "2023-2024",
      description: "Coverd Front-End fundamentals, RESTful APIs, and databases using HTML, CSS, JavaScript, Bootstrap, jQuery, Node, Express, Python, Flask, MySQL."
    },
    {
      title: "Web Framework (React JS)",
      location: "Etec Center",
      year: "2024-2025",
      description: "Built interactive, scalable apps using React JS, focusing on state management and component-based architecture. Extra styling materiel Tailwind CSS & Bootstrap. Coverd the old and new version of React."
    },
    {
      title: "UX/UI Design",
      location: "ICT Professional Training Center",
      year: "2025-Present",
      description: "Designed user-friendly interfaces with Figma, emphazing usability, accessibility, and modern design principles. Focused on delivering a seamless and instuitive user experience."
    },
    {
      title: "C# programming",
      location: "ICT Professional Training Center",
      year: "2025-Present",
      description: "Covered C# from basics to advanced, including backend development with ASP.NET, and system application development. Familier with Visual Studio and building desktop applications."
    }
  ]
}

const Structure = ({ title, data }: { title: string, data: StructureDataType[] }) => {
  return (
    <div className="w-full h-full flex flex-col space-y-5 text-md md:text-xl font-normal overflow-hidden">
      <header className="w-full flex-shrink-0 lg:h-1/6 text-3xl md:text-4xl flex items-center justify-center space-x-3 font-semibold">
        <IoSchool />
        <span>{title}</span>
      </header>

      <article className="w-full flex-1 lg:h-5/6 p-4 overflow-y-auto text-start space-y-6 font-normal border-y-2 border-[var(--theme-300)] lg:border-none">
        {data.map((item, index) =>
          <section key={index} className="space-y-2">
            <h1 className="font-semibold">{item.title}</h1>
            <ul className="flex justify-between">
              <li className="font-semibold italic">{item.location}</li>
              <li className="opacity-50">{item.year}</li>
            </ul>
            <p>{item.description}</p>
          </section>
        )}
      </article>
    </div>
  )
}


const Resume: React.FC<ResumeProps> = ({ theme }) => {

  const [activeSection, setActiveSection] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024)
  const sections: SectionProps[] =  [
    { name: "Profile", component: <Profile /> },
    { name: "Education", component: <Structure title="Education" data={structureData.Education} /> },
    { name: "Courses", component: <Structure title="Courses" data={structureData.Courses} /> },
    { name: "Referances", component: <Referances /> }
  ]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
    
  }, [])

  const quickScrollSections = sections.filter(s => s.name !== "Profile" || isMobile)
  const scrollToSection = (index: number) => setActiveSection(index)

  return (
    <div className="w-screen h-screen py-24 px-4 lg:p-20 overflow-hidden relative">
      {/* Quick Navigation */}
      <aside className="absolute z-20">
        <Dropdown theme={theme} scrollTo={scrollToSection} isMobile={isMobile} />
      </aside>

      <main className="w-full h-full flex flex-col lg:flex-row">
        {/* Fixed on PC */}
        <section className="hidden lg:block w-2/5 h-full">
          <Profile />
        </section>

        {/* Dynamic Scroll */}
        <section className="w-full lg:w-3/5 h-full flex flex-col text-center bg-none overflow-hidden">
          { quickScrollSections[activeSection]?.component }
        </section>

      </main>
    </div>
  )
}

export default Resume
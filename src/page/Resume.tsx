import { JSX } from "react"
import { CiAt } from "react-icons/ci"
import { IoIosPin } from "react-icons/io"
import { LuPhone } from "react-icons/lu"
import { FaScrewdriverWrench } from "react-icons/fa6"
import { GiOpenBook } from "react-icons/gi"
import { IoSchool, IoPersonSharp } from "react-icons/io5"
import { RiSidebarFoldFill, RiSidebarUnfoldFill  } from "react-icons/ri"


// TODO: Interface
interface ResumeProps {
  theme: "light" | "dark"
}

type ContactType = {
  icon: JSX.Element,
  text: string
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


// TODO: Mini Components
// ? Dropdown Quick Scroll-To
const QuickScroll: React.FC<ResumeProps> = ({ theme }) => {

  const icons = [
    { text: "Profile", icon: <IoPersonSharp /> },
    { text: "Skills", icon: <FaScrewdriverWrench /> },
    { text: "Education", icon: <IoSchool /> },
    { text: "Courses", icon: <IoSchool /> },
    { text: "Referances", icon: <GiOpenBook /> }
  ]


  return (
    <>
      {/* From Uiverse.io by 3bdel3ziz-T */}
      <div className="flex flex-col justify-center items-center relative transition-all duration-[450ms] ease-in-out w-16">
        <article className="border border-solid border-gray-700 w-full ease-in-out duration-500 left-0 rounded-2xl inline-block shadow-lg shadow-black/15 bg-[var(--theme-100)] overflow-hidden">
        {icons.map((data, index) =>
          <button
            key={index} 
            className={`relative w-full h-16 p-4 rounded-xl 
              flex items-center justify-center text-[var(--theme-500)] ease-in-out duration-150
              hover:scale-110 active:scale-95
              ${theme === "light"
                ? "bg-sky-100 active:bg-gray-100"
                : "bg-[var(--theme-400)] active:bg-sky-500"}`}
            >
            <input className="hidden peer" type="radio" name="path" id="dashboard" />
            <div className="flex items-center text-2xl" >
              {data.icon}
              <span className={`hidden`}>{data.text}</span>
            </div>
          </button>
        )}

        </article>
      </div>

    </>
  )
}


// ? Profile-Side
const Profile: React.FC<ResumeProps> = ({ theme }) => {

  const ContactInfo: ContactType[] = [
    { icon: <LuPhone />, text: "+855 89 804 644" },
    { icon: <CiAt />, text: "vimeanchan09@gmail.com" },
    { icon: <IoIosPin />, text: "House 13E0 St.60 Khan Dangkao Phnom Penh" }
  ]

  return (
    <div className="w-full h-full relative">
      <aside className="absolute z-20">
        <QuickScroll theme={theme}  />
      </aside>

      <header className="w-full h-3/6 flex flex-col items-center justify-evenly">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <img
            src="Tony_Stark.jpg"
            alt="Profile Resume"
            className="w-full h-full object-fit-cover" />
        </div>
        <section className="text-center">
          <h2 className="text-5xl font-semibold">Chan Vimean</h2>
          <h3 className="text-2xl">Web Full-Stack Developer & UX/UI Designer</h3>
        </section>
      </header>

      <article className="w-full h-3/6 flex flex-col justify-evenly p-2 font-normal">
        {/* About me */}
        <section className="space-y-2">
          <header className="text-xl font-semibold">About me</header>
          <p>
            Creative and problem-solving IT student with a passion htmlFor Front-End development
            and UX/UI Design. Skilled in JavaScript, Figma, and full-stack tech, always
            prioritizing user experience over chaotic coding. Independent learner, trend-savy,
            and driven to craft intuitive digital solutions.
          </p>
        </section>

        {/* Contact */}
        <section className="space-y-2">
          <h1 className="text-xl font-semibold">Contact</h1>
          <ul className="flex flex-col justify-evenly py-2 border-y-2 border-[var(--theme-300)]">
            { ContactInfo.map((contact, index) =>
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


// ? Skills
const Skills = () => {

  const skillsList: string[] = [
    "React (JS & TS) | Express & Node",
    "SQL/NOSQL MySQL & MongoDB",
    "Figma (UX/UI) & Canva",
    "Adobe Premier Pro",
    "Problem-Solving & Creative Thinking"
  ]

  return (
    <div className="w-full h-full space-y-5 text-xl font-medium">
      <h1 className="text-4xl flex items-center justify-center space-x-3 font-semibold">
        <FaScrewdriverWrench  />
        <span>Skills</span>
      </h1>
      <hr /><br />
      <ul className="text-start list-disc list-inside space-y-2">
        { skillsList.map((skill, index) =>
          <li key={index}>{skill}</li>
        )}
      </ul>
    </div>
  )
}

// ? Referances
const Referances = () => {

  return (
    <div className="w-full h-full space-y-5 text-xl font-normal">
      <h1 className="text-4xl flex items-center justify-center space-x-3 font-semibold">
        <GiOpenBook />
        <span>Referances</span>
      </h1>
      <hr /><br />
      <article className="flex flex-col lg:flex-row items-center justify-evenly space-y-4 lg:space-y-0">
        {/* 1st Referanec */}
        <ul className="text-start space-y-2">
          <li className="font-semibold text-3xl">Nhanh Nhim</li>
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
          <li className="font-semibold text-3xl">Kung Noraksmey</li>
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


// ? Education
const structureData: StructureType = {
  Education: [
    {
      title: "Bachelor of InhtmlFormation Technology",
      location: "Royal University of Law and Economics (RULE)",
      year: "2024-Present",
      description: "Currently a sophomore majoring in InhtmlFormation Technology at University of Law and Economics (RULE). Learning the art of problem-solving and mastering both Front-End and Full-Stack development. RULE's strong academic foundation fuels my passion htmlFor innovative tech solutions in a fast-evolving industry."
    },
    {
      title: "English GEP 12 and Diploma",
      location: "Australia Centre htmlFor Education (ACE)",
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

const Strcuture = ({ title, data }: { title: string, data: StructureDataType[] }) => {

  return (
    <div className="w-full h-full space-y-5 text-xl font-normal overflow-hidden">
      <h1 className="w-full h-1/6 text-4xl flex items-center justify-center space-x-3 font-semibold">
        <IoSchool />
        <span>{title}</span>
      </h1>
      <hr /><br />
      <article className="w-full h-5/6 text-start space-y-6 font-normal border-y-2 p-2 border-[var(--theme-300)] overflow-y-auto overflow-hidden">
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

const Resume: React.FC<ResumeProps> = ({ theme} ) => {
  return (
    <div className="w-screen h-screen p-36">
      <main className="w-full h-full flex">

        <section className="w-full lg:w-2/5 h-full relative bg-[var(--theme-200)]">
          <Profile theme={theme} />
        </section>

        <section className="lg:w-3/5 h-full flex flex-col p-10 text-center bg-[var(--theme-200)] border-l-2 border-[var(--theme-300)]">
          {/* <Skills /> */}
          {/* <Referances /> */}
          {/* <Strcuture title="Education" data={structureData.Education} /> */}
          {/* <Strcuture title="Coures" data={structureData.Courses} /> */}
        </section>

      </main>
    </div>
  )
}

export default Resume
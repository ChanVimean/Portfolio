import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"


interface HomeProps {
  theme: "light" | "dark"
}

// ? Support Component
const HomeSection:React.FC<HomeProps> = ({ theme }) => {
  return (
    <main className="flex flex-col w-full h-full items-center lg:p-28">
      <article className="flex flex-col w-full h-full justify-center items-center lg:items-start font-bold space-y-2 p-4 md:p-8">
        <h3 className="text-xl md:text-2xl lg:text-3xl">Hey I'm Chan Vimean</h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl">Full-Stack Developer &</h1>
        <h1 className="text-3xl md:text-4xl lg:text-5xl">UX/UI Designer</h1>
        <h3 className="text-xl md:text2xl lg:text-3xl">Innovating through design, refining through code.</h3>
        <div className="flex items-center space-x-2 text-md md:text-lg lg:text-xl">
          <span className="underline">Work flow:</span>
          Inspiration
          <span className="mx-1 md:mx-2"><FaArrowRightLong /></span>
          Design
          <span className="mx-1 md:mx-2"><FaArrowRightLong /></span>
          Build
          <span className="mx-1 md:mx-2"><FaArrowRightLong /></span>
          Deploy
        </div>
        <div className="flex mt-6 space-x-6">
          <button className={`flex items-center px-6 py-2 rounded-full text-xl md:text-2xl border-4
            shadow-md cursor-pointer
            ${theme === "light"
              ? "text-[var(--theme-100)] bg-[var(--theme-500)] border-[var(--theme-200)] hover:opacity-90 duration-150 ease-in-out active:opacity-80"
              : "text-[var(--theme-500)] bg-transparentborder-[var(--theme-500)] hover:bg-[var(--theme-100)] hover:opacity-90 duration-150 ease-in active:bg-[var(--theme-200)]"}`}
          >
            Get Start
            <span className="ms-2"><FaArrowRight /></span>
          </button>
          <button className={`flex items-center px-4 py-2 rounded-full text-xl md:text-2xl border-4
            shadow-md cursor-pointer text-[var(--theme-100)]
            ${theme === "light"
              ? "bg-[var(--theme-400)] border-[var(--theme-200)] hover:bg-[var(--theme-300)] duration-150 ease-in-out active:bg-[var(--theme-400)]"
              : "bg-[var(--theme-300)] border-[var(--theme-300)] hover:opacity-90 duration-150 ease-in-out active:bg-[var(--theme-500)]"}`}
          >
            Resume
          </button>
        </div>
        <section className="mb-20 mt-20 lg:mb-0">
          <ul className="flex h-full w-full lg:w-1/5 justify-start items-center space-x-4 text-4xl lg:text-5xl">
            <li className="text-blue-600 cursor-pointer duration-150 ease-in-out hover:text-blue-500 active:text-blue-400"><FaFacebook /></li>
            <li className="text-blue-500 cursor-pointer duration-150 ease-in-out hover:text-blue-400 active:text-blue-300"><FaTelegram /></li>
            <li className="text-cyan-600 cursor-pointer duration-150 ease-in-out hover:text-cyan-500 active:text-cyan-400"><FaLinkedin /></li>
            <li className="text-cyan-700 cursor-pointer duration-150 ease-in-out hover:text-cyan-600 active:text-cyan-500"><FaGithub /></li>
          </ul>
        </section>
      </article>

    </main>
  )
}

const Home:React.FC<HomeProps> = ({ theme }) => {
  return (
    <div className="w-screen h-screen flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-3/5 py-16 md:py-36 lg:py-0">
        <HomeSection theme={theme} />
      </div>
      <div className="w-full lg:w-2/5 h-48 md:h-64 lg:h-auto lg:py-48 lg:pe-16 overflow-hidden">
        <img
          src="Tony_Stark.jpg"
          alt="Home Banner"
          className="w-full h-full object-cover" />
      </div>

    </div>
  )
}

export default Home